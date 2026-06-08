-- ==========================================
-- FIX ALL RLS POLICIES - RUN THIS TO FIX ALL ISSUES
-- ==========================================
-- This will fix: reviews, blogs, videos, contact, appointments
-- ==========================================

-- Drop all existing policies first
DROP POLICY IF EXISTS "Allow public read access to published videos" ON videos;
DROP POLICY IF EXISTS "Allow authenticated users to read all videos" ON videos;
DROP POLICY IF EXISTS "Allow authenticated users to insert videos" ON videos;
DROP POLICY IF EXISTS "Allow authenticated users to update videos" ON videos;
DROP POLICY IF EXISTS "Allow authenticated users to delete videos" ON videos;

DROP POLICY IF EXISTS "Allow public read access to approved reviews" ON reviews;
DROP POLICY IF EXISTS "Allow authenticated users to read all reviews" ON reviews;
DROP POLICY IF EXISTS "Allow public insert for reviews" ON reviews;
DROP POLICY IF EXISTS "Allow authenticated users to update reviews" ON reviews;
DROP POLICY IF EXISTS "Allow authenticated users to delete reviews" ON reviews;

DROP POLICY IF EXISTS "Allow public read access to published blogs" ON blogs;
DROP POLICY IF EXISTS "Allow authenticated users to read all blogs" ON blogs;
DROP POLICY IF EXISTS "Allow authenticated users to insert blogs" ON blogs;
DROP POLICY IF EXISTS "Allow authenticated users to update blogs" ON blogs;
DROP POLICY IF EXISTS "Allow authenticated users to delete blogs" ON blogs;

DROP POLICY IF EXISTS "Allow public insert for contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to read contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to delete contact submissions" ON contact_submissions;

DROP POLICY IF EXISTS "Allow public insert for appointment bookings" ON appointment_bookings;
DROP POLICY IF EXISTS "Allow authenticated users to read appointment bookings" ON appointment_bookings;
DROP POLICY IF EXISTS "Allow authenticated users to update appointment bookings" ON appointment_bookings;
DROP POLICY IF EXISTS "Allow authenticated users to delete appointment bookings" ON appointment_bookings;

-- Ensure RLS is enabled
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointment_bookings ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- VIDEOS POLICIES
-- ==========================================
CREATE POLICY "Allow public read access to published videos"
    ON videos FOR SELECT
    TO anon, authenticated
    USING (is_published = true);

CREATE POLICY "Allow authenticated users to read all videos"
    ON videos FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to insert videos"
    ON videos FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update videos"
    ON videos FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to delete videos"
    ON videos FOR DELETE
    TO authenticated
    USING (true);

-- ==========================================
-- REVIEWS POLICIES
-- ==========================================
CREATE POLICY "Allow public read access to approved reviews"
    ON reviews FOR SELECT
    TO anon, authenticated
    USING (is_approved = true);

CREATE POLICY "Allow authenticated users to read all reviews"
    ON reviews FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow public insert for reviews"
    ON reviews FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update reviews"
    ON reviews FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to delete reviews"
    ON reviews FOR DELETE
    TO authenticated
    USING (true);

-- ==========================================
-- BLOGS POLICIES
-- ==========================================
CREATE POLICY "Allow public read access to published blogs"
    ON blogs FOR SELECT
    TO anon, authenticated
    USING (is_published = true);

CREATE POLICY "Allow authenticated users to read all blogs"
    ON blogs FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to insert blogs"
    ON blogs FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update blogs"
    ON blogs FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to delete blogs"
    ON blogs FOR DELETE
    TO authenticated
    USING (true);

-- ==========================================
-- CONTACT SUBMISSIONS POLICIES
-- ==========================================
CREATE POLICY "Allow public insert for contact submissions"
    ON contact_submissions FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contact submissions"
    ON contact_submissions FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to update contact submissions"
    ON contact_submissions FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to delete contact submissions"
    ON contact_submissions FOR DELETE
    TO authenticated
    USING (true);

-- ==========================================
-- APPOINTMENT BOOKINGS POLICIES
-- ==========================================
CREATE POLICY "Allow public insert for appointment bookings"
    ON appointment_bookings FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read appointment bookings"
    ON appointment_bookings FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to update appointment bookings"
    ON appointment_bookings FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to delete appointment bookings"
    ON appointment_bookings FOR DELETE
    TO authenticated
    USING (true);

-- ==========================================
-- GRANT USAGE ON SCHEMAS
-- ==========================================
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;

-- ==========================================
-- COMPLETION MESSAGE
-- ==========================================
-- All RLS policies have been fixed
-- Reviews, blogs, videos, contact, and appointments should now work properly
