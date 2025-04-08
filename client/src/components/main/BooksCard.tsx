import { Link } from 'react-router-dom';
import "../../../public/styles/main/BooksCard.css";
export default function BooksCard() {
    return (
        <>
        <div className="books-card">
            <div className="books-card-header">
                <h2>Move On and Grow</h2>
                <h4 className="book-card-author">Peter K. Kirika</h4>
            </div>
            <div className="books-card-body">
                <img src="../../../public/images/blog 1.jpg" alt="" />
                <p>It is a long established fact that a reader will be distracted by
                     the readable content of a page when looking at its layout. The point
                      of using Lorem Ipsum is that it has a more-or-less normal distribution
                       of letters, as opposed to using 'Content here, content here', making
                        it look like readable English. Many desktop publishing packages and
                         web page editors now use Lorem Ipsum as their default model text,
                          and a search for 'lorem ipsum' will uncover many web sites still
                           in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose injected humour and the like
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque
                             quam id lorem volutpat, nec tincidunt augue elementum. Cras eget porttitor 
                             nisi. 
                </p>
            </div>
            <div className="books-card-footer">
                <Link to="https"> Buy this book</Link>

            </div>
        </div>
        </>
    )
}