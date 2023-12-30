import React, { useState, useEffect } from 'react';

const SearchBox = ({ data ,results, setResults }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (!query) {
      setResults([]);
      return;
    }

    const filteredResults = data.filter((result) =>
      result.description.toLowerCase().includes(query.toLowerCase())
    );

   
    setResults(filteredResults);
    if (filteredResults.length === 0) {
      setError('No matching results found.');
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query , data]);

  return (
    <div>
    <div className="flex mt-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter your search query"
        className="px-4 py-1 border text-sm border-black w-full md:w-96 focus:border-r-0 "
      />
      <button
        className="bg-black text-white text-xs px-4 capitalize"
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
      {error && <p className="text-red-500">{error}</p>}
      
    </div>
  );
};

export default SearchBox;

