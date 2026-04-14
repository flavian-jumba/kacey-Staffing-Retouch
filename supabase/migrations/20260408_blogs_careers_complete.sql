-- ============================================================
-- COMPLETE BLOGS & CAREERS MIGRATION
-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor)
-- This creates the tables and sets up proper RLS policies
-- ============================================================

-- 1. BLOGS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  author TEXT NOT NULL DEFAULT 'Kacey Staffing Team',
  category TEXT DEFAULT 'General',
  tags TEXT[] DEFAULT '{}',
  read_time TEXT DEFAULT '5 min read',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Auto-generate slug from title
CREATE OR REPLACE FUNCTION generate_blog_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := lower(regexp_replace(NEW.title, '[^a-zA-Z0-9]+', '-', 'g'));
    NEW.slug := trim(both '-' from NEW.slug);
    NEW.slug := NEW.slug || '-' || substr(gen_random_uuid()::text, 1, 8);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_blog_slug ON public.blogs;
CREATE TRIGGER set_blog_slug
  BEFORE INSERT ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION generate_blog_slug();

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_blogs_updated_at ON public.blogs;
CREATE TRIGGER set_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();


-- 2. CAREERS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS public.careers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  employment_type TEXT NOT NULL DEFAULT 'Full-time',
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  benefits TEXT[] DEFAULT '{}',
  salary_range TEXT,
  cover_image_url TEXT,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  application_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Auto-generate slug from title
CREATE OR REPLACE FUNCTION generate_career_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := lower(regexp_replace(NEW.title, '[^a-zA-Z0-9]+', '-', 'g'));
    NEW.slug := trim(both '-' from NEW.slug);
    NEW.slug := NEW.slug || '-' || substr(gen_random_uuid()::text, 1, 8);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_career_slug ON public.careers;
CREATE TRIGGER set_career_slug
  BEFORE INSERT ON public.careers
  FOR EACH ROW
  EXECUTE FUNCTION generate_career_slug();

DROP TRIGGER IF EXISTS set_careers_updated_at ON public.careers;
CREATE TRIGGER set_careers_updated_at
  BEFORE UPDATE ON public.careers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();


-- 3. ROW LEVEL SECURITY (RLS) - PROPERLY CONFIGURED
-- ============================================================

-- Enable RLS on both tables
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public can view published blogs" ON public.blogs;
DROP POLICY IF EXISTS "Admins can manage blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authenticated users can view all blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authenticated users can create blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authenticated users can update blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authenticated users can delete blogs" ON public.blogs;

DROP POLICY IF EXISTS "Public can view published careers" ON public.careers;
DROP POLICY IF EXISTS "Admins can manage careers" ON public.careers;
DROP POLICY IF EXISTS "Authenticated users can view all careers" ON public.careers;
DROP POLICY IF EXISTS "Authenticated users can create careers" ON public.careers;
DROP POLICY IF EXISTS "Authenticated users can update careers" ON public.careers;
DROP POLICY IF EXISTS "Authenticated users can delete careers" ON public.careers;

-- PUBLIC READ: Anyone can view PUBLISHED blogs (for the website)
CREATE POLICY "Public can view published blogs"
  ON public.blogs FOR SELECT
  USING (is_published = true);

-- PUBLIC READ: Anyone can view PUBLISHED careers (for the website)
CREATE POLICY "Public can view published careers"
  ON public.careers FOR SELECT
  USING (is_published = true);

-- ADMIN: Authenticated users (logged in) can view ALL blogs (including drafts)
CREATE POLICY "Authenticated users can view all blogs"
  ON public.blogs FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- ADMIN: Authenticated users can create blogs
CREATE POLICY "Authenticated users can create blogs"
  ON public.blogs FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- ADMIN: Authenticated users can update blogs
CREATE POLICY "Authenticated users can update blogs"
  ON public.blogs FOR UPDATE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- ADMIN: Authenticated users can delete blogs
CREATE POLICY "Authenticated users can delete blogs"
  ON public.blogs FOR DELETE
  USING (auth.uid() IS NOT NULL);

-- ADMIN: Authenticated users can view ALL careers (including drafts)
CREATE POLICY "Authenticated users can view all careers"
  ON public.careers FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- ADMIN: Authenticated users can create careers
CREATE POLICY "Authenticated users can create careers"
  ON public.careers FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- ADMIN: Authenticated users can update careers
CREATE POLICY "Authenticated users can update careers"
  ON public.careers FOR UPDATE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- ADMIN: Authenticated users can delete careers
CREATE POLICY "Authenticated users can delete careers"
  ON public.careers FOR DELETE
  USING (auth.uid() IS NOT NULL);


-- 4. STORAGE BUCKETS FOR IMAGES
-- ============================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('blog-images', 'blog-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']),
  ('career-images', 'career-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
ON CONFLICT (id) DO NOTHING;

-- Storage policies
DROP POLICY IF EXISTS "Public read blog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated update blog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated delete blog images" ON storage.objects;
DROP POLICY IF EXISTS "Public read career images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated upload career images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated update career images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated delete career images" ON storage.objects;

-- Public read for all blog images
CREATE POLICY "Public read blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

-- Authenticated users can upload blog images
CREATE POLICY "Authenticated upload blog images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated update blog images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated delete blog images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);

-- Public read for all career images
CREATE POLICY "Public read career images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'career-images');

-- Authenticated users can upload career images
CREATE POLICY "Authenticated upload career images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'career-images' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated update career images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'career-images' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated delete career images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'career-images' AND auth.uid() IS NOT NULL);


-- 5. INDEXES FOR PERFORMANCE
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_blogs_published ON public.blogs (is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs (slug);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON public.blogs (category);
CREATE INDEX IF NOT EXISTS idx_careers_published ON public.careers (is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_careers_slug ON public.careers (slug);
CREATE INDEX IF NOT EXISTS idx_careers_department ON public.careers (department);


-- 6. ENABLE REALTIME FOR LIVE UPDATES
-- ============================================================
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.blogs;
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.careers;
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

