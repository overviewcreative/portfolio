import { createAdminClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const folder = formData.get('folder') as string || 'general'

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    const client = createAdminClient()
    
    // Generate unique filename
    const timestamp = Date.now()
    const filename = `${folder}/${timestamp}-${file.name}`
    
    // Convert file to buffer
    const buffer = await file.arrayBuffer()
    
    // Upload to Supabase Storage
    const { data, error } = await client.storage
      .from('portfolio-images')
      .upload(filename, buffer, {
        contentType: file.type,
        upsert: false
      })

    if (error) {
      console.error('Upload error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    // Get public URL
    const { data: publicData } = client.storage
      .from('portfolio-images')
      .getPublicUrl(data.path)

    return NextResponse.json({
      url: publicData.publicUrl,
      path: data.path,
      name: file.name
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}
