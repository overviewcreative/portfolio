import { createAdminClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const client = createAdminClient()

    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const client = createAdminClient()

    const projectData = {
      title: body.title,
      description: body.description,
      category: body.category,
      tags: body.tags || [],
      featured: body.featured || false,
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
      updated_at: new Date().toISOString(),
    }

    const { data, error } = await client
      .from('projects')
      .update(projectData)
      .eq('id', id)
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error('Update error:', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const client = createAdminClient()

    const { error } = await client
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
