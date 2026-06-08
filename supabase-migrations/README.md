# Admin Panel Setup Guide

This guide will help you set up the admin panel for the NMDC website with the provided credentials.

## 📋 Prerequisites

- Supabase project already created (URL and Anon Key in `.env`)
- Access to Supabase Dashboard

## 🔐 Admin Credentials

- **Email:** brigaidearnmdcnazeer@gmail.com
- **Password:** AbdullahNazeer@1221

## 🚀 Setup Steps

### Step 1: Run Database Migrations

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `nyoslrmjxboqpeuoemsy`
3. Navigate to **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy and paste the contents of `01_setup_tables.sql`
6. Click **Run** to execute the script
7. Wait for the script to complete (you should see "Success" message)

### Step 2: Create Admin User

**Method 1: Via Supabase Dashboard (Recommended)**

1. In Supabase Dashboard, go to **Authentication** > **Users**
2. Click **Add User** > **Create New User**
3. Enter the following:
   - **Email:** brigaidearnmdcnazeer@gmail.com
   - **Password:** AbdullahNazeer@1221
4. Set **Auto Confirm User** to **ON**
5. Click **Create User**

**Method 2: Sign Up via Admin Panel**

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:5173/admin/login`
3. Click "Sign Up" (if available) or use the login form
4. The user will be created automatically

### Step 3: Test the Admin Panel

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:PORT/brigaidear/login
   ```

   (Replace PORT with your dev server port, e.g., 8084)

3. Login with your credentials:
   - Email: brigaidearnmdcnazeer@gmail.com
   - Password: AbdullahNazeer@1221

4. You should be redirected to the dashboard at `/brigaidear/dashboard`

## 📊 Admin Panel Features

### Dashboard

- Overview statistics (total videos, published, reviews, pending)
- Quick actions to add videos and manage reviews
- Recent activity display

### Videos Management (`/brigaidear/videos`)

- Add new videos (YouTube URL or file upload)
- Edit existing videos
- Delete videos
- Toggle publish/unpublish status
- Categorize videos
- Support for both YouTube and local file uploads

### Reviews Management (`/brigaidear/reviews`)

- View all reviews
- Filter by status (all, pending, approved)
- Approve pending reviews
- Delete inappropriate reviews
- View ratings and comments

## 🔧 Troubleshooting

### Issue: Login fails with "Invalid email or password"

**Solution:**

- Verify the user exists in Supabase Dashboard > Authentication > Users
- Check that the email is exactly: brigaidearnmdcnazeer@gmail.com
- Ensure the password is correct: AbdullahNazeer@1221
- Make sure "Auto Confirm User" was enabled when creating the user

### Issue: Can't access admin routes

**Solution:**

- Check that you're logged in (session should be maintained)
- Clear browser cookies and try again
- Check browser console for authentication errors
- Verify `.env` file has correct Supabase credentials
- Try accessing `/brigaidear/login` directly

### Issue: Videos/Reviews not loading

**Solution:**

- Verify tables were created by running: `SELECT * FROM videos;` and `SELECT * FROM reviews;` in SQL Editor
- Check RLS policies are enabled: `SELECT * FROM pg_policies WHERE tablename IN ('videos', 'reviews');`
- Ensure you're authenticated when accessing admin routes

### Issue: File upload not working

**Solution:**

- Verify storage bucket was created: Check Storage > Buckets in Supabase Dashboard
- Check storage policies are enabled
- Ensure the bucket is public
- Check browser console for upload errors

## 🗄️ Database Schema

### Videos Table

```sql
- id (UUID, Primary Key)
- title (TEXT, Required)
- description (TEXT, Optional)
- youtube_url (TEXT, Optional)
- video_url (TEXT, Optional)
- thumbnail_url (TEXT, Optional)
- category (TEXT, Default: 'general')
- is_published (BOOLEAN, Default: true)
- upload_source (TEXT, Default: 'youtube')
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Reviews Table

```sql
- id (UUID, Primary Key)
- author_name (TEXT, Required)
- comment (TEXT, Required)
- rating (INTEGER, 1-5)
- is_approved (BOOLEAN, Default: false)
- created_at (TIMESTAMP)
```

## 🔒 Security Features

- Row Level Security (RLS) enabled on all tables
- Public read access only for published content
- Authenticated users can manage all content
- Secure file upload with storage policies
- Session-based authentication via Supabase Auth

## 📝 Additional Notes

- The admin panel uses Supabase Auth for authentication
- Sessions are automatically managed by Supabase client
- All admin routes require authentication
- The layout includes a sidebar for easy navigation
- Responsive design works on mobile and desktop

## 🎯 Next Steps

After setup is complete:

1. Add your first video via `/admin/videos`
2. Test the review approval system
3. Customize the dashboard if needed
4. Add more admin users if required (using the same process)

## 📞 Support

If you encounter any issues not covered in this guide:

1. Check the Supabase Dashboard logs
2. Review browser console errors
3. Verify all migration scripts ran successfully
4. Ensure environment variables are correctly set

---

**Admin Panel is now ready to use! 🎉**
