import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Blogs from "./pages/main/Blogs";
import SingleBlogPage from "./pages/main/SingleBlogPage";
import Books from "./pages/main/Books";
import Projects from "./pages/main/Projects";
import Contact from "./pages/main/Contact";
import AdminDashboard from "./pages/admin/AdminDashboard";
import BlogDashboard from "./pages/admin/BlogDashboard";
import BookDashboard from "./pages/admin/BookDashboard";
import ProjectDashboard from "./pages/admin/ProjectDashboard";
import BlogForm from "./pages/admin/BlogForm";
import EditBlog from "./pages/admin/EditBlog";
import { BlogProvider } from "./context/BlogContext";

export default function App() {

  return (
    <>
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/blogs" element={<MainLayout><Blogs /></MainLayout>} />
          <Route path="/blog/:id" element={<MainLayout><SingleBlogPage /></MainLayout>} />
          <Route path="/books" element={<MainLayout><Books /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
          <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/blogs" element={<AdminLayout><BlogDashboard /></AdminLayout>} />
          <Route path="/admin/blog/edit/:id" element={<AdminLayout><EditBlog /></AdminLayout>} />
          <Route path="/admin/books" element={<AdminLayout><BookDashboard /></AdminLayout>} />
          <Route path="/admin/projects" element={<AdminLayout><ProjectDashboard /></AdminLayout>} />
          <Route path="/admin/blog-form" element={<AdminLayout><BlogForm /></AdminLayout>} />

          
        </Routes>
      </BrowserRouter>
      </BlogProvider>
    </>
  )
}


