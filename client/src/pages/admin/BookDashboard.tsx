import { useContext } from "react"
import AdminBooksCard from "../../components/admin/AdminBooksCard"
import { Link } from "react-router-dom"
import { BooksContext } from "../../context/BooksContext"

const BookDashboard = () => {
  const { books} = useContext(BooksContext);
  return (
    <div className="blog-dashboard"> 
        <div className="blog-dashboard-header">
            <h1>Books Dashboard</h1>
            <Link to="/admin/book-form" className="add-blog-button">Add New Book</Link>
        </div> 
        {books.map(book => (
             <AdminBooksCard key={book.id} book={book} />
        ))}
      
    </div>
  )}
    

export default BookDashboard