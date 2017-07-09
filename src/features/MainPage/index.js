import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { LoadingIndicator } from 'openui';
import * as BooksAPI from '../../BooksAPI';
import parseBooks from './utils/parseBooks';
import { MainPagePresentation } from './components';

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
          <MainPagePresentation
            {...this.state}
            onChangeBookShelf={this.handleChangingShelf}
          />
        )}
      />
    );
  }
}
