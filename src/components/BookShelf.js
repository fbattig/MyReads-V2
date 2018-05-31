import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ bookShelfTitle, books , handleBookShelfUpdate}) => (
    <div className='bookshelf'>
        <h2 className='bookshelf-title'>{bookShelfTitle}</h2>
        <div className='bookshelf-books'>
            <ol className='books-grid'>
                {books.length > 0 && books.map(book => {

                    return (
                        <li key={book.id}>

                            <Book
                                shelf={book.shelf}
                                bookId={book.id}
                                bookCoverImage={book.imageLinks.thumbnail}
                                bookTitle={book.title}
                                bookAuthors={book.authors}
                                handleBookShelfUpdate ={handleBookShelfUpdate}
                            />

                        </li>
                    );
                })

                }
            </ol>
        </div>
    </div>
)


BookShelf.propTypes = {
    books: PropTypes.array,
    bookShelfTitle: PropTypes.string,
    handleBookShelfUpdate: PropTypes.func.isRequired,
};

BookShelf.defaultProps = {
    bookShelfTitle: 'No title set',
    books: [],
  };

export default BookShelf;