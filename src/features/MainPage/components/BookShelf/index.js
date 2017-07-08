import React, { PropTypes } from 'react';
import { Book } from '../../../../components';

export default function BookShelf({
  title,
  books,
}) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li>
              <Book
                title={book.title}
                author={book.authors[0]}
                image={book.imageLinks.smallThumbnail}
              />
            </li>
            ),
          )}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

BookShelf.defaultProps = {
  books: [],
};
