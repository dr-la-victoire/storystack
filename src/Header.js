import React from "react";

export default function Header() {
  return (
    <div className="header">
      <h1>StoryStack</h1>
      <div className="search">
        <input type="text" placeholder="What are you looking for?" />
        <button>Search</button>
      </div>
    </div>
  );
}
