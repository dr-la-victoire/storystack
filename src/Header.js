import React from "react";

export default function Header({ search, setSearch, onSearch }) {
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
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}
