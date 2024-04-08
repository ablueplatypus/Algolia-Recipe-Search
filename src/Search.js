import React, { useState } from 'react';


const Search = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', query);
    // You can perform further actions like fetching data from an API here
  };

  return (
    <div >
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search Here..."
        />
        <button className= 'search-button' type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
