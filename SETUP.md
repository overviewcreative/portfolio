# Portfolio Supabase Setup Guide

## Problem
The `projects` table doesn't exist in your Supabase database yet. This is causing the 400 error when you try to create projects.

## Solution - Create the Database Table

### Step 1: Open Supabase Dashboard
1. Go to https://supabase.com
2. Log in and find your project: **daenckttijtdfwzwoemw**
3. Click on the project

### Step 2: Go to SQL Editor
- Click **SQL Editor** in the left sidebar
- Click **+ New Query**

### Step 3: Copy & Paste the Schema
Copy this SQL and paste it into the query editor:

```sql
-- Portfolio Projects Schema
-- Created: December 16, 2025

-- Create ENUM type for accent colors
CREATE TYPE accent_color AS ENUM ('orange', 'blue', 'green');
CREATE TYPE project_status AS ENUM ('draft', 'published');

-- Create projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Basic Info
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  
  -- Metadata
  tags TEXT[] NOT NULL DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  status project_status DEFAULT 'draft',
  accent_color accent_color DEFAULT 'orange',
  
  -- Content
  challenge TEXT NOT NULL,
  approach JSONB NOT NULL DEFAULT '[]',
  quick_facts JSONB NOT NULL DEFAULT '[]',
  
  -- Media
  featured_image_url TEXT NOT NULL,
  featured_image_alt TEXT NOT NULL,
  gallery JSONB NOT NULL DEFAULT '[]',
  video_embed_url TEXT,
  video_embed_title TEXT,
  
  -- Links
  links JSONB NOT NULL DEFAULT '[]',
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_projects_category ON projects(category);

-- Create auto-update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### Step 4: Execute the Query
- Click **RUN** button (or Ctrl+Enter)
- You should see a success message

### Step 5: Create Storage Bucket for Images
1. Click **Storage** in the left sidebar
2. Click **+ New Bucket**
3. Name it: `portfolio-images`
4. **IMPORTANT**: Make it **Public** (toggle the switch)
5. Click **Create Bucket**

### Step 6: Test the Admin Panel
1. Go to http://localhost:3001/admin
2. Fill in the form:
   - Title: "Test Project"
   - Description: "A test project"
   - Category: "DESIGN"
   - Featured Image: Upload an image
   - Alt text: "Test image"
   - Challenge: "Test challenge"
3. Click **SAVE PROJECT**
4. You should see a success message!

## Troubleshooting

### If you see "Database error: relation 'projects' does not exist"
- The SQL query didn't run successfully
- Go back to SQL Editor and run the query again
- Make sure you see the "Success" message

### If you see "Failed to upload image"
- Check that the `portfolio-images` bucket exists
- Verify it's set to **Public**
- Check your Supabase credentials in `.env.local`

### If you see "HTTP 500: Server error"
- Check the browser console (F12) for details
- Check the terminal where you ran `npm run dev`
- Look for the actual error message

## What Happens Next

After creating a project:
1. It's saved as "draft" by default
2. To display it on the site, you need to change `status` to `published` in Supabase
3. Images are uploaded to `portfolio-images` bucket
4. Projects appear on `/projects` page when published
5. Each project gets a unique URL like `/projects/test-project`

## File Locations

- **Admin Form**: `/admin`
- **Projects List**: `/projects`
- **Project Detail**: `/projects/{slug}`
- **Schema File**: `schema.sql`
- **API Routes**: `app/api/projects/*`
- **Environment Config**: `.env.local`
