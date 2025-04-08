import React from 'react';  
import { Blog } from '../../types/definations';
import "../../../public/styles/main/BlogCard.css";

interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src="../../public/images/blog.jpg" alt="" />
            </div>
            <div className="blog-card-body">
                <p className="blog-card-date">{blog.date}</p>
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-text">{blog.content.substring(0, 100)}</p>
                
            </div>
            <button>Read More</button>  
        </div>
    )
}
export default BlogCard;