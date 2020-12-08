import React from "react";

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
        className="searchBox"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        />
    );
};

export default SearchBox;