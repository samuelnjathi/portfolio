import BlogCard from "../../components/main/BlogCard";
import { Link } from "react-router-dom";
import "../../../public/styles/admin/BlogDashboard.css";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

const BlogDashboard = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="blog-dashboard"> 
        <div className="blog-dashboard-header">
            <h1>Blog Dashboard</h1>
            <Link to="/admin/blog-form" className="add-blog-button">Add New Blog</Link>
        </div> 
        <div className="blog-list">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>  
    </div>
  )
}

export default BlogDashboard