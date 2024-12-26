import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <h2>Welcome To StoryStack</h2>
      <p>Click on "Pinned Books" to see your pinned books!</p>
      <button className="pinned-books-btn">
        <Link to="/pinned">Pinned Books</Link>
      </button>
    </div>
  );
}
