import React from 'react';
import './SearchBar.css'; // Styling for search bar

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
