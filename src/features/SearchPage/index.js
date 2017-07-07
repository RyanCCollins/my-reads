import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class SearchPage extends Component { // eslint-disable-line
  render() {
    return (
      <Route
        exact
        path="/search"
        render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <a role="button" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        )}
      />
    );
  }
}
