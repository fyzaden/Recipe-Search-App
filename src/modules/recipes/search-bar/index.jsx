import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
export const SearchBar = () => {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="input-wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <FaSearch id="search-icon" />
        <input
          onChange={handleChange}
          aria-label="Recipe search"
          placeholder="Search for recipes..."
          value={query}
        />
      </form>
    </div>
  );
};
