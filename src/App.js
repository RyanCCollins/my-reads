import React from 'react';
// import * as BooksAPI from './BooksAPI';
import { SearchPage, MainPage } from './features';
import './App.css';

class BooksApp extends React.Component { // eslint-disable-line

  render() {
    return (
      <div className="app">
        <SearchPage />
        <MainPage />
      </div>
    );
  }
}

export default BooksApp;
