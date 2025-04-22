import {useContext, useState} from 'react'
import { BooksContext } from '../../context/BooksContext'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const { books, editBook } = useContext(BooksContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const book = books.find(book => book.id === id);
    const [editedBook, setEditedBook] = useState({
        title: book?.title || "",
        author: book?.author || "",
        content: book?.content || "",
        image: book?.image || "",
        date: book?.date || ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedBook(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleEditBook = (e: React.FormEvent) => {
        e.preventDefault();
        editBook(id!, editedBook);
        setEditedBook({
            title: "",
            author: "",
            content: "",
            image: "",
            date: ""
        });
        navigate("/admin/books");
    }
  return (
    <div className="blog-form-container">
    <div className="blog-form-header">
        <h1>Edit Book Review</h1>
    </div>
    <form className="blog-form" onSubmit={handleEditBook}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
                onChange={handleChange}
                value={editedBook.title}
                type="text" 
                id="title" 
                name="title" 
                required />
        </div>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input 
                onChange={handleChange}
                value={editedBook.author}
                type="text" 
                id="author" 
                name="author" 
                required />
        </div>
        <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea 
                onChange={handleChange}
                value={editedBook.content}
                id="content" 
                name="content" 
                rows={5} 
                required></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input 
                onChange={handleChange}
                value={editedBook.image}
                type="text" 
                id="image" 
                name="image" 
                required />
        </div>
        <div className="form-group">
            <label htmlFor="date">Date Read</label>
            <input 
                onChange={handleChange}
                value={editedBook.date}
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

export default EditBook