import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SearchPresentation } from './components';
import * as BooksAPI from '../../BooksAPI';

export default class SearchPage extends Component { // eslint-disable-line
  constructor() {
    super();
    this.state = {
      input: '',
      results: [],
    };
  }
  handleChange = (e) => {
    const input = e.target.value;
    this.setState({ input });
    BooksAPI.search(input, 20)
      .then(results => this.setState({ results }));
  };
  render() {
    return (
      <Route
        exact
        path="/search"
        render={() => (
          <SearchPresentation
            {...this.state}
            onInput={this.handleChange}
          />
        )}
      />
    );
  }
}
