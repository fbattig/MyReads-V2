import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import BookList from './components/BookList';
import * as BooksAPI from './api/BooksAPI';
import BookDetails from './components/BookDetails';



class App extends Component {

  constructor(props) {
    super(props);
    this.loadBooks = this.loadBooks.bind(this);
    this.handleBookShelfUpdate = this.handleBookShelfUpdate.bind(this);
  }

  state = {
    books: []
  }

  componentDidMount() {
    this.loadBooks();
  }


  handleBookShelfUpdate(book, shelf) {
    BooksAPI.update(book, shelf).then((res) => res && this.loadBooks());
  };

  loadBooks() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  


  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <Search
              handleBookShelfUpdate={this.handleBookShelfUpdate}
              books={this.state.books}
            />
          )}
        />

 <Route
          path='/details/:bookId'
          component={BookDetails}
        />

        <Route
          path='/'
          exact={true}
          render={() => (
            <BookList
              books={this.state.books}
              handleBookShelfUpdate={this.handleBookShelfUpdate}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
