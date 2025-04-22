import { Link } from 'react-router-dom';
import "../../../public/styles/main/BooksCard.css";
import { BooksCardProps } from '../../types/definations';

const BooksCard: React.FC<BooksCardProps> = ({book}) => {
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
                <Link to="#"> Buy this book</Link>

            </div>
        </div>
        </>
    )
}
export default BooksCard;