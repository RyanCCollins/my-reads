import React, { PropTypes } from 'react';
import { Book } from '../../../../ui';
import uuid from '../../../../utils/uuid';

export default function BookShelf({
  title,
  books,
  onChangeBookShelf,
}) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={`${uuid()}-${book.id}`}>
              <Book
                onChangeBookShelf={shelf => onChangeBookShelf(book, shelf)}
                shelf={book.shelf}
                title={book.title}
                author={book.authors && book.authors.length ? book.authors[0] : 'Unknown Author'}
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
  onChangeBookShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

BookShelf.defaultProps = {
  books: [],
};
