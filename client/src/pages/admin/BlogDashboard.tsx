import BlogCard from "../../components/main/BlogCard";
import { Link } from "react-router-dom";
import "../../../public/styles/admin/BlogDashboard.css";

const BlogDashboard = () => {
  return (
    <div className="blog-dashboard"> 
        <div className="blog-dashboard-header">
            <h1>Blog Dashboard</h1>
            <Link to="/admin/blog-form" className="add-blog-button">Add New Blog</Link>
        </div> 
        <div className="blog-list">
            <BlogCard />
        </div>  
    </div>
  )
}

export default BlogDashboard