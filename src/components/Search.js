import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';


class Search extends Component {

    static propTypes = {
        books: PropTypes.array,
        handleBookShelfUpdate: PropTypes.func.isRequired,
      }
    
      static defaultProps = {
        books: [],
      }

    state = {
        searchedList: [],
        query: '',
    }

    handleSearchUpdate(event) {
        const query = event.target.value;
        this.setState({
            query,
        });

        BooksAPI.search(query, 20).then((books) => {
            const searchedBooks = books;
            const currentBooks = this.props.books;
            if (searchedBooks) {
                for (let i = 0; i < searchedBooks.length; i++) {

                    for (let i = 0; i < searchedBooks.length; i++) {
                        for (let j = 0; j < currentBooks.length; j++) {
                            if (searchedBooks[i].id === currentBooks[j].id) {
                                searchedBooks[i].shelf = currentBooks[j].shelf;
                                break;
                            } else {
                                searchedBooks[i].shelf = 'none';
                            }
                        }
                    }
                }
            }
            this.setState({ searchedList: searchedBooks });

        });
    }



    render() {
        return (
            <div className='search-books' >
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Back</Link>
                    <div className='search-books-input-wrapper'>

                        <input
                            type="text"
                            onChange={(event) => { this.handleSearchUpdate(event); }}
                            placeholder='Search by Title or Author'
                            value={this.state.query}
                        />

                    </div>
                </div>
                <div className='search-books-results'>
                    <BookShelf
                        bookShelfTitle='Search Results'
                        books={this.state.searchedList}
                        handleBookShelfUpdate={this.props.handleBookShelfUpdate}
                    />
                    <ol className='books-grid' />
                </div>
            </div>
        )
    }
}

export default Search;