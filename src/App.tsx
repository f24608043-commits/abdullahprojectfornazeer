import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { Header } from "@/components/site/Header.tsx";
import { Footer } from "@/components/site/Footer.tsx";
import { WhatsAppButton } from "@/components/site/WhatsAppButton.tsx";
import Index from "./routes/index.tsx";
import Services from "./routes/services.tsx";
import Reviews from "./routes/reviews.tsx";
import Contact from "./routes/contact.tsx";
import Education from "./routes/education.tsx";
import BookAppointment from "./routes/bookappointment.tsx";
import BlogSlug from "./routes/blogs.$slug.tsx";
import AdminLayout from "./routes/admin/_layout.tsx";
import AdminDashboard from "./routes/admin/dashboard.tsx";
import AdminLogin from "./routes/admin/login.tsx";
import AdminReviews from "./routes/admin/reviews.tsx";
import AdminVideos from "./routes/admin/videos.tsx";
import BrigaidearLayout from "./routes/brigaidear/_layout.tsx";
import BrigaidearDashboard from "./routes/brigaidear/dashboard.tsx";
import BrigaidearLogin from "./routes/brigaidear/login.tsx";
import BrigaidearReviews from "./routes/brigaidear/reviews.tsx";
import BrigaidearBlogs from "./routes/brigaidear/blogs.tsx";
import BrigaidearVideos from "./routes/brigaidear/videos.tsx";
import BrigaidearContact from "./routes/brigaidear/contact.tsx";
import BrigaidearBookAppointment from "./routes/brigaidear/bookappointment.tsx";
import BrigaidearIndex from "./routes/brigaidear/index.tsx";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/brigaidear");
  
  if (isAdminRoute) {
    return <>{children}</>;
  }
  
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/bookappointment" element={<BookAppointment />} />
            <Route path="/blogs/:slug" element={<BlogSlug />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="login" element={<AdminLogin />} />
              <Route path="reviews" element={<AdminReviews />} />
              <Route path="videos" element={<AdminVideos />} />
            </Route>
            
            {/* Brigaidear routes */}
            <Route path="/brigaidear" element={<BrigaidearLayout />}>
              <Route index element={<BrigaidearIndex />} />
              <Route path="dashboard" element={<BrigaidearDashboard />} />
              <Route path="login" element={<BrigaidearLogin />} />
              <Route path="reviews" element={<BrigaidearReviews />} />
              <Route path="blogs" element={<BrigaidearBlogs />} />
              <Route path="videos" element={<BrigaidearVideos />} />
              <Route path="contact" element={<BrigaidearContact />} />
              <Route path="bookappointment" element={<BrigaidearBookAppointment />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
