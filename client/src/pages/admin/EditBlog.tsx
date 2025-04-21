import React, { useState, useContext, FormEvent } from 'react';
import "../../../public/styles/admin/BlogForm.css";
import { BlogContext } from '../../context/BlogContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog: React.FC = () => {
    const navigate = useNavigate()
    const { editBlog, blogs } = useContext(BlogContext);
    const { id } = useParams()
    const blog = blogs.find(blog => blog.id === id); 
    const [editedBlog, setEditedBlog] = useState({
        title: blog?.title || '',
        content: blog?.content || '',
        image: blog?.image || '',
        date: blog?.date || ''
    })

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedBlog((prev) => { 
           return { 
            ...prev,
            [name]: value
            }
        });
    }

    const handleEditBlog = (e: FormEvent) => {
        e.preventDefault();
        if (!id) return;
        editBlog(id!, editedBlog);
        setEditedBlog({
            title: '',
            content: '',
            image: '',
            date: ''
        })
        navigate("/admin/blogs");
        
    }
  return (
    <div className="blog-form-container">
        <div className="blog-form-header">
            <h1>Edit Blog</h1>
        </div>
        <form className="blog-form" onSubmit={handleEditBlog}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    onChange={handleEditChange}
                    value={editedBlog.title}
                    type="text" 
                    id="title" 
                    name="title" 
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea 
                    onChange={handleEditChange}
                    value={editedBlog.content}
                    id="content" 
                    name="content" 
                    rows={5} 
                    required></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input 
                    onChange={handleEditChange}
                    value={editedBlog.image}
                    type="text" 
                    id="image" 
                    name="image" 
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input 
                    onChange={handleEditChange}
                    value={editedBlog.date}
                    type="date" 
                    id="date" 
                    name="date" 
                    required />
            </div>
            <div className="form-group">
                <button type="submit">Create Blog</button>
            </div>
        </form>
    </div>
  )
}

export default EditBlog