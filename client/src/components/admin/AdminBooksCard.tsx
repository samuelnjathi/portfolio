import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import "../../../public/styles/main/BooksCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { BooksCardProps } from '../../types/definations';
import { BooksContext } from '../../context/BooksContext';

const AdminBooksCard: React.FC<BooksCardProps> = ({book}) => {
    const { removeBook } = useContext(BooksContext);
    return (
        <>
        <div className="books-card">
            <div className="books-card-header">
                <h2>{book?.title}</h2>
                <p className="book-card-author">Date read: {book?.date}</p>
                <h4 className="book-card-author">{book?.author}</h4>
            </div>
            <div className="books-card-body">
                <img src={book?.image} alt={book?.title} />
                <p>{book?.content}                                   
                </p>
            </div>
            <div className="books-card-footer">
                <Link to="#"> Edit this book</Link>
                <div>
                    <Link to={`/admin/book/edit/${book.id}`}>
                        <EditIcon className="card-buttons edit-button" />
                    </Link>
                    <DeleteIcon className="card-buttons delete-button" onClick={() => removeBook(book.id)} /> 
                </div>
            </div>
        </div>
        </>
    )
}
export default AdminBooksCard