import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Pinned from "./Pinned";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  const [search, setSearch] = useState(""); // Setting state for the search input
  const [books, setBooks] = useState([]); // Setting state for the books fetched from Google Books API
  const [loading, setLoading] = useState(false); // Setting state for loading
  const [error, setError] = useState(""); // Setting state for error messages
  const [pinnedBooks, setPinnedBooks] = useState([]); // Setting state for pinned Books

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

  // Function for pinned books
  const pinnedBooksFunction = book => {
    if (!pinnedBooks.some(pinned => pinned.id === book.id)) {
      setPinnedBooks([...pinnedBooks, book]);
      // console.log("Book successfully pinned");
    }

    setBooks(prevBooks => prevBooks.filter(b => b.id !== book.id));
  };

  // Function to unpin a book from pinned books
  const unpinBookFunction = book => {
    setPinnedBooks(pinnedBooks.filter(pinned => pinned.id !== book.id));
  };

  return (
    <Router>
      <div className="container">
        <Header
          search={search}
          setSearch={setSearch}
          onSearch={searchFunction}
        />
        <nav>
          <Link to="/">Home</Link> | <Link to="/pinned">Pinned Books</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Body
                books={books}
                loading={loading}
                error={error}
                pinBook={pinnedBooksFunction}
              />
            }
          />
          <Route
            path="/pinned"
            element={
              <Pinned
                pinnedBooks={pinnedBooks}
                unpinBooks={unpinBookFunction}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
