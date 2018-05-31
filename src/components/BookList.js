import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom';

const BookList = ({ books, handleBookShelfUpdate }) => {
    const shelves = [
        {
            name: 'Currently Reading',
            id: 'currentlyReading'
        },
        {
            name: 'Want To Read',
            id: 'wantToRead'
        },
        {
            name: 'Read',
            id: 'read'
        }
    ]



    return (
        <div className='list-books'>
            <div className='list-books-title'>
                <h1>My-Reads App</h1>
            </div>
            <div className='list-books-content'>
                {shelves.map((bookShelf) => (

                    <BookShelf
                        key={bookShelf.id}
                        bookShelfTitle={bookShelf.name}
                        books={books.filter((book) => {
                            return book.shelf === bookShelf.id;
                        })}
                        handleBookShelfUpdate={handleBookShelfUpdate}
                    />
                )
                )}
            </div>
            <div className='open-search'>
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}

BookList.propTypes={
 books: PropTypes.array,
 handleBookShelfUpdate: PropTypes.func.isRequired,
}


export default BookList;