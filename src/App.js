import './App.css';
import SearchBar from './components/SearchBar'
import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
      </header>
    </div>
  );
}

export default App;
