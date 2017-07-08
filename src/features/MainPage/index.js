import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import parseBooks from './utils/parseBooks';
import { BookShelves } from './components';

export default class MainPage extends Component { // eslint-disable-line

  state = {
    books: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    BooksAPI.getAll()
      .then(results => parseBooks(results))
      .then(books => this.setState({ books }));
  }

  render() {
    return (
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
