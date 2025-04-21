import React from 'react';  
import { Link } from 'react-router-dom';
import "../../../public/styles/main/BlogCard.css";
import { BlogCardProps } from '../../types/definations';


const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
    
    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src={blog?.image} alt={blog?.title} />
            </div>
            <div className="blog-card-body">
                <p className="blog-card-date">{blog?.date}</p>
                <h2 className="blog-card-title">{blog?.title}</h2>
                <p className="blog-card-text">{blog?.content.substring(0, 140)}...</p>
                
            </div>
            <Link to={`/blog/${blog.id}`}>
                <button>Read More</button>
            </Link>
               
        </div>
    )
}
export default BlogCard;