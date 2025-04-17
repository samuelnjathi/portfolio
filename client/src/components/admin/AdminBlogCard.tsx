import React, { useContext } from 'react';  
import { Blog } from '../../types/definations';
import "../../../public/styles/main/BlogCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { BlogContext } from '../../context/BlogContext';


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
                <p className="blog-card-text">{blog?.content.substring(0, 100)}</p>
                
            </div>
            <div className="blog-card-footer">
                <button>Read More</button>
                <div>
                    <EditIcon className="blog-card-buttons edit" />
                    <DeleteIcon className="blog-card-buttons delete" onClick={() => deleteBlog(blog?.id)} /> 
                </div> 
            </div>
        </div>
    )
}
export default BlogCard;