import { createAdminClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const client = createAdminClient()
    
    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const client = createAdminClient()

    // Create slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')

    const projectData = {
      slug,
      title: body.title,
      description: body.description,
      category: body.category,
      tags: body.tags || [],
      featured: body.featured || false,
      status: 'draft',
      accent_color: body.accentColor || 'orange',
      challenge: body.challenge,
      approach: body.approach || [],
      quick_facts: body.quickFacts || [],
      featured_image_url: body.featuredImageUrl,
      featured_image_alt: body.featuredImageAlt,
      gallery: body.gallery || [],
      video_embed_url: body.videoEmbedUrl || null,
      video_embed_title: body.videoEmbedTitle || null,
      links: body.links || [],
    }

    const { data, error } = await client
      .from('projects')
      .insert([projectData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ 
        error: `Database error: ${error.message}. Make sure the 'projects' table exists in Supabase.` 
      }, { status: 400 })
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('Create error:', errorMessage)
    return NextResponse.json({ 
      error: `Server error: ${errorMessage}. Check console for details.` 
    }, { status: 500 })
  }
}
