-- ==========================================
-- ADDITIONAL TABLES FOR BLOGS, CONTACT, APPOINTMENTS
-- ==========================================
-- Run this in your Supabase SQL Editor after 01_setup_tables.sql
-- ==========================================

-- ==========================================
-- BLOGS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS blogs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    seo_slug TEXT NOT NULL UNIQUE,
    html_content TEXT NOT NULL,
    title_image_url TEXT,
    excerpt TEXT,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(seo_slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(is_published);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);

-- ==========================================
-- CONTACT SUBMISSIONS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    date TEXT,
    service TEXT,
    message TEXT,
    whatsapp_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);

-- ==========================================
-- APPOINTMENT BOOKINGS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS appointment_bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    preferred_date TEXT NOT NULL,
    preferred_time TEXT NOT NULL,
    service TEXT NOT NULL,
    urgency TEXT NOT NULL,
    symptoms TEXT NOT NULL,
    previous_treatment TEXT,
    medical_conditions TEXT,
    additional_notes TEXT,
    whatsapp_sent BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled', 'completed'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointment_bookings(status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointment_bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointment_bookings(preferred_date);

-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointment_bookings ENABLE ROW LEVEL SECURITY;

-- Blogs policies
-- Allow public read access to published blogs
CREATE POLICY "Allow public read access to published blogs"
    ON blogs FOR SELECT
    USING (is_published = true);

-- Allow authenticated users to read all blogs
CREATE POLICY "Allow authenticated users to read all blogs"
    ON blogs FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to insert blogs
CREATE POLICY "Allow authenticated users to insert blogs"
    ON blogs FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Allow authenticated users to update blogs
CREATE POLICY "Allow authenticated users to update blogs"
    ON blogs FOR UPDATE
    TO authenticated
    USING (true);

-- Allow authenticated users to delete blogs
CREATE POLICY "Allow authenticated users to delete blogs"
    ON blogs FOR DELETE
    TO authenticated
    USING (true);

-- Contact submissions policies
-- Allow public insert for contact submissions
CREATE POLICY "Allow public insert for contact submissions"
    ON contact_submissions FOR INSERT
    TO anon
    WITH CHECK (true);

-- Allow authenticated users to read all contact submissions
CREATE POLICY "Allow authenticated users to read contact submissions"
    ON contact_submissions FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to update contact submissions
CREATE POLICY "Allow authenticated users to update contact submissions"
    ON contact_submissions FOR UPDATE
    TO authenticated
    USING (true);

-- Allow authenticated users to delete contact submissions
CREATE POLICY "Allow authenticated users to delete contact submissions"
    ON contact_submissions FOR DELETE
    TO authenticated
    USING (true);

-- Appointment bookings policies
-- Allow public insert for appointment bookings
CREATE POLICY "Allow public insert for appointment bookings"
    ON appointment_bookings FOR INSERT
    TO anon
    WITH CHECK (true);

-- Allow authenticated users to read all appointment bookings
CREATE POLICY "Allow authenticated users to read appointment bookings"
    ON appointment_bookings FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to update appointment bookings
CREATE POLICY "Allow authenticated users to update appointment bookings"
    ON appointment_bookings FOR UPDATE
    TO authenticated
    USING (true);

-- Allow authenticated users to delete appointment bookings
CREATE POLICY "Allow authenticated users to delete appointment bookings"
    ON appointment_bookings FOR DELETE
    TO authenticated
    USING (true);

-- ==========================================
-- FUNCTIONS FOR UPDATED_AT
-- ==========================================

-- Trigger for blogs table
CREATE TRIGGER update_blogs_updated_at
    BEFORE UPDATE ON blogs
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for appointment_bookings table
CREATE TRIGGER update_appointment_bookings_updated_at
    BEFORE UPDATE ON appointment_bookings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- SAMPLE DATA (Optional - for testing)
-- ==========================================

-- Insert sample blog
INSERT INTO blogs (title, seo_slug, html_content, title_image_url, excerpt, is_published)
VALUES (
    'Understanding Dental Implants: A Complete Guide',
    'understanding-dental-implants-complete-guide',
    '<h2>What are Dental Implants?</h2><p>Dental implants are artificial tooth roots that provide a permanent base for fixed replacement teeth.</p><h2>Benefits of Dental Implants</h2><ul><li>Improved appearance</li><li>Improved speech</li><li>Improved comfort</li><li>Easier eating</li><li>Improved self-esteem</li></ul>',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    'Learn everything you need to know about dental implants, from the procedure to recovery.',
    true
) ON CONFLICT (seo_slug) DO NOTHING;

-- ==========================================
-- COMPLETION MESSAGE
-- ==========================================
-- All additional tables have been created successfully
