import React from 'react';
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