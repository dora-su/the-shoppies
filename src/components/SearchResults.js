import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie'

const SearchResults = ({ results }) => {
  const renderEntry = e => {
     return (
      <Movie movie={e}>
        console.log("hello")
      </Movie>
    );
  };

  return (
    <div className="search-result-list">
            {results.map(renderEntry)}
    </div>
  );
};

export default SearchResults;