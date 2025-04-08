import { useState, useContext } from "react";
import "../../../public/styles/admin/BlogForm.css";
import { BlogContext } from "../../context/BlogContext";

const BlogForm = () => {
    const { addBlog } = useContext(BlogContext);
    const [blogInput, setBlogInput] = useState({
        title: "",
        content: "",
        image: "",
        date: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBlogInput((prev) => {
            return {
                ...prev,
                [name]: value
        }});   
    }

    const handleAddBlog = (e: React.FormEvent) => {
        e.preventDefault()
        addBlog(blogInput);
        setBlogInput({
            title: "",
            content: "",
            image: "",
            date: ""
        });
    }
  return (
    <div className="blog-form-container">
        <div className="blog-form-header">
            <h1>Create New Blog</h1>
        </div>
        <form className="blog-form" onSubmit={handleAddBlog}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    onChange={handleChange}
                    value={blogInput.title}
                    type="text" 
                    id="title" 
                    name="title" 
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea 
                    onChange={handleChange}
                    value={blogInput.content}
                    id="content" 
                    name="content" 
                    rows={5} 
                    required></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input 
                    onChange={handleChange}
                    value={blogInput.image}
                    type="text" 
                    id="image" 
                    name="image" 
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input 
                    onChange={handleChange}
                    value={blogInput.date}
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

export default BlogForm