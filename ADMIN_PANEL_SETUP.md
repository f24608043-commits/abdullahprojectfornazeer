# Admin Panel Setup - Quick Start Guide

## ✅ What's Already Done

The admin panel structure is fully implemented with:
- ✅ Login page with Supabase authentication
- ✅ Dashboard with statistics
- ✅ Videos management (CRUD operations)
- ✅ Reviews management (approve/delete)
- ✅ File upload support via Supabase Storage
- ✅ Responsive layout with sidebar navigation
- ✅ Route protection (requires authentication)
- ✅ API functions for all operations

## 🔐 Admin Credentials

- **Email:** brigaidearnmdcnazeer@gmail.com
- **Password:** AbdullahNazeer@1221

## 🚀 Setup Instructions

### Step 1: Set Up Database (5 minutes)

1. Open Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `nyoslrmjxboqpeuoemsy`
3. Go to **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy the contents of `supabase-migrations/01_setup_tables.sql`
6. Paste and click **Run**
7. Wait for "Success" message

### Step 2: Create Admin User (2 minutes)

**Via Supabase Dashboard:**
1. Go to **Authentication** > **Users**
2. Click **Add User** > **Create New User**
3. Enter:
   - Email: `brigaidearnmdcnazeer@gmail.com`
   - Password: `AbdullahNazeer@1221`
4. Set **Auto Confirm User** to **ON**
5. Click **Create User**

### Step 3: Start Development Server

```bash
npm run dev
```

### Step 4: Access Admin Panel

1. Open browser: `http://localhost:PORT/brigaidear/login` (replace PORT with your dev server port)
2. Login with your credentials
3. You'll be redirected to `/brigaidear/dashboard`

## 📊 Admin Panel Features

### Dashboard (`/brigaidear/dashboard`)
- Total videos count
- Published videos count
- Total reviews count
- Pending reviews count
- Quick action buttons
- Recent videos list
- Pending reviews preview

### Videos (`/brigaidear/videos`)
- Add videos via YouTube URL
- Upload video files directly
- Upload custom thumbnails
- Edit existing videos
- Delete videos
- Publish/unpublish toggle
- Category management
- File upload via Supabase Storage

### Reviews (`/brigaidear/reviews`)
- View all reviews
- Filter by status (all/pending/approved)
- Approve pending reviews
- Delete inappropriate reviews
- Star rating display
- Date tracking

## 🔧 Technical Details

### Database Tables

**videos:**
- id (UUID, Primary Key)
- title, description, category
- youtube_url, video_url, thumbnail_url
- is_published, upload_source
- created_at, updated_at

**reviews:**
- id (UUID, Primary Key)
- author_name, comment, rating
- is_approved
- created_at

### Storage

- Bucket: `videos` (public)
- Supports: MP4, WebM, OGG video files
- Supports: All image formats for thumbnails
- Automatic public URL generation

### Security

- Row Level Security (RLS) enabled
- Public read for published content only
- Authenticated users can manage all content
- Session-based authentication
- Auto-redirect to login if not authenticated

## 🐛 Troubleshooting

### Login Issues
- Verify user exists in Supabase Dashboard > Authentication > Users
- Check email is exactly: `brigaidearnmdcnazeer@gmail.com`
- Ensure password is correct
- Clear browser cookies and try again

### Database Issues
- Run `SELECT * FROM videos;` in SQL Editor to verify table exists
- Run `SELECT * FROM reviews;` to verify reviews table
- Check RLS policies: `SELECT * FROM pg_policies WHERE tablename IN ('videos', 'reviews');`

### File Upload Issues
- Check Storage > Buckets in Supabase Dashboard
- Verify `videos` bucket exists and is public
- Check storage policies are enabled
- Check browser console for errors

### Route Issues
- Ensure you're logged in
- Check browser console for authentication errors
- Verify `.env` has correct Supabase credentials
- Try accessing `/brigaidear/login` directly

## 📝 File Structure

```
src/
├── pages/admin/
│   ├── AdminLogin.tsx       # Login page
│   ├── AdminLayout.tsx      # Layout with sidebar
│   ├── AdminDashboard.tsx   # Dashboard
│   ├── AdminVideos.tsx      # Videos management
│   └── AdminReviews.tsx     # Reviews management
├── routes/brigaidear/
│   ├── _layout.tsx          # Route layout
│   ├── login.tsx            # Login route
│   ├── dashboard.tsx        # Dashboard route
│   ├── videos.tsx           # Videos route
│   ├── reviews.tsx          # Reviews route
│   └── index.tsx            # Redirect to login
└── api/
    └── adminApi.ts          # API functions
```

## 🎯 Next Steps

1. ✅ Run database migrations
2. ✅ Create admin user
3. ✅ Test login functionality
4. ✅ Add a test video
5. ✅ Test review approval
6. ✅ Customize if needed

## 📞 Additional Resources

- Supabase Dashboard: https://supabase.com/dashboard
- Project URL: https://nyoslrmjxboqpeuoemsy.supabase.co
- Detailed setup guide: `supabase-migrations/README.md`

---

**Your admin panel is ready to use! 🎉**
