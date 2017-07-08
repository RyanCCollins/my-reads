import React from 'react';
import PT from 'prop-types';
import { BookShelfChanger } from '../';

export default function Book({
  title,
  author,
  image,
}) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${image}")`,
          }}
        />
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}

Book.propTypes = {
  title: PT.string.isRequired,
  author: PT.string.isRequired,
  image: PT.string.isRequired,
};
