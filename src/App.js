import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import axios from "axios";
//import console = require("console");

export default function App() {
  const [search, setSearch] = useState(""); // Setting state for the search input
  const [books, setBooks] = useState([]); // Setting state for the books fetched from Google Books API
  const [loading, setLoading] = useState(false); // Setting state for loading
  const [error, setError] = useState(""); // Setting state for error messages

  // Searching the API for books
  const searchFunction = async () => {
    if (!search) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB1IMMr7Bmo0BPdOEgVdtHXojo1lOjJ6I8`
      );
      //console.log("API Response: ", response.data);
      setBooks(response.data.items || []);
    } catch (err) {
      setError("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header search={search} setSearch={setSearch} onSearch={searchFunction} />
      <Body books={books} loading={loading} error={error} />
    </div>
  );
}
