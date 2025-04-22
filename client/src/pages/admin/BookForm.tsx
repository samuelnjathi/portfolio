import  { useState, useContext} from 'react'
import { BooksContext } from '../../context/BooksContext';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    const { addBook } = useContext(BooksContext);
    const navigate = useNavigate();
    const [bookInput, setBookInput] = useState({
        title: "",
        author: "",
        content: "",
        image: "",
        date: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > ) => {
        const {name, value} = e.target;
        setBookInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleAddBook = (e: React.FormEvent) =>{
        e.preventDefault();
        addBook(bookInput);
        setBookInput({
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
            <h1>Create New Book Review</h1>
        </div>
        <form className="blog-form" onSubmit={handleAddBook}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    onChange={handleChange}
                    value={bookInput.title}
                    type="text" 
                    id="title" 
                    name="title" 
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input 
                    onChange={handleChange}
                    value={bookInput.author}
                    type="text" 
                    id="author" 
                    name="author" 
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea 
                    onChange={handleChange}
                    value={bookInput.content}
                    id="content" 
                    name="content" 
                    rows={5} 
                    required></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input 
                    onChange={handleChange}
                    value={bookInput.image}
                    type="text" 
                    id="image" 
                    name="image" 
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date Read</label>
                <input 
                    onChange={handleChange}
                    value={bookInput.date}
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

export default BookForm