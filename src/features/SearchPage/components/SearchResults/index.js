import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../../../ui';

export default function SearchResults({ results }) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {results.length ? results.map(book =>
          (
            <li>
              <Book
                key={book.id}
                shelf={book.shelf}
                title={book.title}
                author={book.authors && book.authors.length ? book.authors[0] : 'Unknown Author'}
                image={book.imageLinks.smallThumbnail}
              />
            </li>
          ),
        ) : null}
      </ol>
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

SearchResults.defaultProps = {
  results: [],
};
