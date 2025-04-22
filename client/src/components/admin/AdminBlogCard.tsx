import React, { useContext } from 'react';  
import { Blog } from '../../types/definations';
import "../../../public/styles/main/BlogCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { BlogContext } from '../../context/BlogContext';
import { Link } from 'react-router-dom';


interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
    const { deleteBlog } = useContext(BlogContext);
    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src={blog?.image} alt={blog?.title} />
            </div>
            <div className="blog-card-body">
                <p className="blog-card-date">{blog?.date}</p>
                <h2 className="blog-card-title">{blog?.title}</h2>
                <p className="blog-card-text">{blog?.content.substring(0, 140)}</p>
                
            </div>
            <div className="blog-card-footer">
                <Link to={`/blog/${blog.id}`}>
                    <button>Read More</button>
                </Link>
                
                <div>
                    <Link to={`/admin/blog/edit/${blog.id}`}>
                        <EditIcon className="card-buttons edit-button" />
                    </Link>
                    <DeleteIcon className="card-buttons delete-button" onClick={() => deleteBlog(blog?.id)} /> 
                </div> 
            </div>
        </div>
    )
}
export default BlogCard;