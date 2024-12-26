import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ search, setSearch, onSearch }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch();
    navigate("/search-results");
  };
  return (
    <div className="header">
      <h1>StoryStack</h1>
      <div className="search">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
