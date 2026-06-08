-- ==========================================
-- SUPABASE DATABASE SETUP FOR ADMIN PANEL
-- ==========================================
-- Run this in your Supabase SQL Editor
-- ==========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- VIDEOS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS videos (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    youtube_url TEXT,
    video_url TEXT,
    thumbnail_url TEXT,
    category TEXT DEFAULT 'general',
    is_published BOOLEAN DEFAULT true,
    upload_source TEXT DEFAULT 'youtube', -- 'youtube' or 'file'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_videos_category ON videos(category);
CREATE INDEX IF NOT EXISTS idx_videos_published ON videos(is_published);
CREATE INDEX IF NOT EXISTS idx_videos_created_at ON videos(created_at DESC);

-- ==========================================
-- REVIEWS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    author_name TEXT NOT NULL,
    comment TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(is_approved);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);

-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Enable RLS
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Videos policies
-- Allow public read access for published videos
CREATE POLICY "Allow public read access to published videos"
    ON videos FOR SELECT
    USING (is_published = true);

-- Allow authenticated users to read all videos
CREATE POLICY "Allow authenticated users to read all videos"
    ON videos FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to insert videos
CREATE POLICY "Allow authenticated users to insert videos"
    ON videos FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Allow authenticated users to update videos
CREATE POLICY "Allow authenticated users to update videos"
    ON videos FOR UPDATE
    TO authenticated
    USING (true);

-- Allow authenticated users to delete videos
CREATE POLICY "Allow authenticated users to delete videos"
    ON videos FOR DELETE
    TO authenticated
    USING (true);

-- Reviews policies
-- Allow public read access to approved reviews
CREATE POLICY "Allow public read access to approved reviews"
    ON reviews FOR SELECT
    USING (is_approved = true);

-- Allow authenticated users to read all reviews
CREATE POLICY "Allow authenticated users to read all reviews"
    ON reviews FOR SELECT
    TO authenticated
    USING (true);

-- Allow public insert for reviews (for the contact form)
CREATE POLICY "Allow public insert for reviews"
    ON reviews FOR INSERT
    TO anon
    WITH CHECK (true);

-- Allow authenticated users to update reviews
CREATE POLICY "Allow authenticated users to update reviews"
    ON reviews FOR UPDATE
    TO authenticated
    USING (true);

-- Allow authenticated users to delete reviews
CREATE POLICY "Allow authenticated users to delete reviews"
    ON reviews FOR DELETE
    TO authenticated
    USING (true);

-- ==========================================
-- FUNCTIONS FOR UPDATED_AT
-- ==========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for videos table
CREATE TRIGGER update_videos_updated_at
    BEFORE UPDATE ON videos
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- STORAGE BUCKETS (for video uploads)
-- ==========================================

-- Create storage bucket for videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('videos', 'videos', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for videos bucket
CREATE POLICY "Allow public read access to videos"
    ON storage.objects FOR SELECT
    TO anon
    USING (bucket_id = 'videos');

CREATE POLICY "Allow authenticated users to upload videos"
    ON storage.objects FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'videos');

CREATE POLICY "Allow authenticated users to update videos"
    ON storage.objects FOR UPDATE
    TO authenticated
    USING (bucket_id = 'videos');

CREATE POLICY "Allow authenticated users to delete videos"
    ON storage.objects FOR DELETE
    TO authenticated
    USING (bucket_id = 'videos');

-- ==========================================
-- SAMPLE DATA (Optional - for testing)
-- ==========================================

-- Insert sample video
INSERT INTO videos (title, description, youtube_url, thumbnail_url, category, is_published, upload_source)
VALUES (
    'Introduction to NMDC',
    'Welcome to Nazeer Maxillofacial & Dental Center. Learn about our services and expertise.',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    'general',
    true,
    'youtube'
) ON CONFLICT DO NOTHING;

-- Insert sample reviews
INSERT INTO reviews (author_name, comment, rating, is_approved)
VALUES 
    ('Ahmed Khan', 'Excellent service and very professional staff. Highly recommended!', 5, true),
    ('Sarah Ahmed', 'Dr. Nazeer is amazing. Best dental experience I have ever had.', 5, true),
    ('Muhammad Ali', 'Great facility and modern equipment. Very satisfied with the treatment.', 4, false)
ON CONFLICT DO NOTHING;

-- ==========================================
-- COMPLETION MESSAGE
-- ==========================================
-- Run the next script (02_create_admin_user.sql) to create the admin user
