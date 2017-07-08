import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SearchPresentation } from './components';
import * as BooksAPI from '../../BooksAPI';

export default class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      results: [],
    };
  }
  componentDidMount() {
    this.state = {
      input: '',
      results: [],
    };
  }
  handleChange = (e) => {
    const input = e.target.value;
    this.setState({ input });
    if (input === '') {
      this.setState({
        results: [],
      });
    } else {
      BooksAPI.search(input, 20)
        .then(results => results.filter(i => i.shelf === 'none'))
        .then(results => this.setState({ results }));
    }
  }
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
