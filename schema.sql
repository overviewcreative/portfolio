-- Portfolio Projects Schema
-- Created: December 16, 2025
-- Supports: Projects with featured images, gallery, and metadata

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE accent_color AS ENUM ('orange', 'blue', 'green');
CREATE TYPE project_status AS ENUM ('draft', 'published');

-- ============================================================================
-- PROJECTS TABLE
-- ============================================================================

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
  approach JSONB NOT NULL DEFAULT '[]', -- { action, details }[]
  quick_facts JSONB NOT NULL DEFAULT '[]', -- { label, value }[]
  
  -- Media
  featured_image_url TEXT NOT NULL,
  featured_image_alt TEXT NOT NULL,
  gallery JSONB NOT NULL DEFAULT '[]', -- { url, caption, alt }[]
  video_embed_url TEXT,
  video_embed_title TEXT,
  
  -- Links
  links JSONB NOT NULL DEFAULT '[]', -- { label, url }[]
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_projects_category ON projects(category);

-- ============================================================================
-- STORAGE BUCKETS (configured in Supabase UI)
-- ============================================================================
-- Create bucket: portfolio-images
-- Set bucket to public
-- Configure CORS as needed
