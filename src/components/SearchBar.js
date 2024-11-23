import React from 'react';
import './SearchBar.css';  

const SearchBar = ({ onSearch }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search notes..."
            onChange={handleChange}
        />
    );
};

export default SearchBar;
