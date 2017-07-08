import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SearchBar({ onInput, input }) {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          autoFocus
          onChange={onInput}
          value={input}
          type="text"
          placeholder="Search by title or author"
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onInput: PropTypes.func.isRequired,
  input: PropTypes.string,
};

SearchBar.defaultProps = {
  input: '',
};
