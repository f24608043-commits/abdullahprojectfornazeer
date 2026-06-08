-- ==========================================
-- CREATE ADMIN USER
-- ==========================================
-- Run this in your Supabase SQL Editor AFTER running 01_setup_tables.sql
-- ==========================================

-- Admin credentials (as provided):
-- Email: brigaidearnmdcnazeer@gmail.com
-- Password: AbdullahNazeer@1221

-- ==========================================
-- OPTION 1: Create admin user via Auth
-- ==========================================

-- This will create the user in Supabase Auth
-- The password will be automatically hashed by Supabase

-- Note: You cannot create users with specific passwords directly in SQL
-- You need to use the Supabase Dashboard or the API

-- ==========================================
-- INSTRUCTIONS TO CREATE ADMIN USER:
-- ==========================================

-- METHOD 1: Via Supabase Dashboard (Recommended)
-- 1. Go to your Supabase project dashboard
-- 2. Navigate to Authentication > Users
-- 3. Click "Add User" > "Create New User"
-- 4. Enter email: brigaidearnmdcnazeer@gmail.com
-- 5. Enter password: AbdullahNazeer@1221
-- 6. Set "Auto Confirm User" to ON
-- 7. Click "Create User"

-- METHOD 2: Via Supabase CLI (if installed)
-- Run this command in your terminal:
-- supabase auth create-user --email brigaidearnmdcnazeer@gmail.com --password AbdullahNazeer@1221 --admin

-- METHOD 3: Via the Admin Panel (after setup)
-- 1. Start your development server
-- 2. Navigate to /brigaidear/login
-- 3. Sign up with the credentials
-- 4. The user will be created automatically

-- ==========================================
-- OPTIONAL: Create admin-specific table for permissions
-- ==========================================

-- Create admin roles table (for future expansion)
CREATE TABLE IF NOT EXISTS admin_roles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'admin', -- 'admin', 'editor', 'viewer'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Enable RLS on admin_roles
ALTER TABLE admin_roles ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read admin roles
CREATE POLICY "Allow authenticated users to read admin roles"
    ON admin_roles FOR SELECT
    TO authenticated
    USING (true);

-- ==========================================
-- AFTER CREATING THE USER:
-- ==========================================

-- Once you have created the user via the Dashboard, 
-- run this to assign them admin role (replace USER_ID with the actual UUID):

-- INSERT INTO admin_roles (user_id, role)
-- VALUES ('USER_ID_FROM_AUTH', 'admin');

-- ==========================================
-- TESTING THE SETUP
-- ==========================================

-- After creating the user and running both migration scripts:
-- 1. Start your dev server: npm run dev
-- 2. Navigate to http://localhost:PORT/brigaidear/login (replace PORT with your dev server port)
-- 3. Login with: brigaidearnmdcnazeer@gmail.com / AbdullahNazeer@1221
-- 4. You should be redirected to /brigaidear/dashboard

-- ==========================================
-- TROUBLESHOOTING
-- ==========================================

-- If you encounter issues:
-- 1. Check that the tables were created: SELECT * FROM videos; SELECT * FROM reviews;
-- 2. Check that RLS policies are enabled: SELECT * FROM pg_policies WHERE tablename IN ('videos', 'reviews');
-- 3. Verify the user exists in Authentication > Users in the dashboard
-- 4. Check browser console for any authentication errors
-- 5. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env

-- ==========================================
-- COMPLETION
-- ==========================================
-- After completing these steps, your admin panel should be fully functional!
