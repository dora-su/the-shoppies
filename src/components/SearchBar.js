import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SearchResults from './SearchResults';
import '../App.css';

const apikey = process.env.REACT_APP_OMDB_API_KEY;

const SearchBar = ({  searchValue }) => {
  const [searchResults, setSearchResults] = useState([]);

    const search = async query => {
        const res = await axios(`https://www.omdbapi.com/?s=${query}&apikey=${apikey}`)
        const results = await res.data.Search;

        if (Array.isArray(results)) {
                    setSearchResults(results);
                  }else{
                      setSearchResults([])
            }
            console.log(results)
    }

  const onInputChange = async e => {
    search(e.target.value);
  }

  console.log(searchResults)
  return (
  <div style={{width:'100%'}}>
    <TextField id="outlined-basic" label="Search for movies..." variant="outlined" fullWidth onChange={onInputChange} value={searchValue} />
    
    {searchResults.length > 0 &&
      <SearchResults
        results={searchResults}
      />
    }
  </div>
  );
};

export default SearchBar;