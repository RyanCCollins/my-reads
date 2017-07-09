import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BookShelves } from '../';

export default function MainPagePresentation(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {props.books &&
          <BookShelves
            {...props}
          />
        }
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

MainPagePresentation.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
