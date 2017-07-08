import React from 'react';
import PropTypes from 'prop-types';
import { BookShelf } from '../';
import uuid from '../../../../utils/uuid';

export default function BookShelves({ shelves, onChangeBookShelf }) {
  return (
    <div>
      {Object.keys(shelves).map(shelf =>
        (<BookShelf
          onChangeBookShelf={onChangeBookShelf}
          key={uuid()}
          title={shelf}
          books={shelves[shelf]}
        />),
      )}
    </div>
  );
}

BookShelves.propTypes = {
  onChangeBookShelf: PropTypes.func.isRequired,
  shelves: PropTypes.shape({
    currentlyReading: PropTypes.arrayOf(
      PropTypes.object,
    ),
    read: PropTypes.arrayOf(
      PropTypes.object,
    ),
    wantToRead: PropTypes.arrayOf(
      PropTypes.object,
    ),
  }).isRequired,
};
