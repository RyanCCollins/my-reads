import React from 'react';
import PropTypes from 'prop-types';
import { SearchResults, SearchBar } from '../';

export default function SearchPresentation({ results, ...rest }) {
  return (
    <div className="search-books">
      <SearchBar {...rest} />
      <SearchResults
        results={results}
      />
    </div>
  );
}

SearchPresentation.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
