import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { LoadingIndicator } from 'openui';
import * as BooksAPI from '../../BooksAPI';
import parseBooks from './utils/parseBooks';
import { BookShelves } from './components';

export default class MainPage extends Component { // eslint-disable-line

  state = {
    books: null,
    loading: true,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    BooksAPI.getAll()
      .then(results => parseBooks(results))
      .then(books => this.setState({ books }))
      .then(() => {
        setTimeout(() => this.setState({ loading: false }), 500);
      });
  }

  handleChangingShelf = (book, shelf) => {
    this.setState({ loading: true });
    BooksAPI.update(book, shelf)
      .then(() => this.loadBooks())
      .then(() => this.setState({ loading: false }));
  }

  render() {
    return this.state.loading
    ? (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LoadingIndicator isLoading />
      </div>
    ) : (
      <Route
        exact
        path="/"
        render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {this.state.books &&
                <BookShelves
                  onChangeBookShelf={this.handleChangingShelf}
                  shelves={this.state.books}
                />
              }
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}
      />
    );
  }
}
