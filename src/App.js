import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Pinned from "./Pinned";
import Main from "./Main";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  const [search, setSearch] = useState(""); // Setting state for the search input
  const [books, setBooks] = useState([]); // Setting state for the books fetched from Google Books API
  const [loading, setLoading] = useState(false); // Setting state for loading
  const [error, setError] = useState(""); // Setting state for error messages
  const [pinnedBooks, setPinnedBooks] = useState(() => {
    const storedPinnedBooks = localStorage.getItem("pinnedBooks");
    return storedPinnedBooks ? JSON.parse(storedPinnedBooks) : [];
  }); // Setting state for pinned Books
  const [view, setView] = useState("pinned");

  // Searching the API for books
  const searchFunction = async () => {
    if (!search) {
      return;
    }

    setLoading(true);
    setError("");
    setView("search");

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

  // Loading Pinned Books from localStorage
  /*useEffect(() => {
    const storedPinnedBooks = localStorage.getItem("pinnedBooks");
    if (storedPinnedBooks) {
      setPinnedBooks(JSON.parse(storedPinnedBooks));
    }
  }, []);*/

  // Saving Pinned Books to localStorage
  useEffect(() => {
    localStorage.setItem("pinnedBooks", JSON.stringify(pinnedBooks));
  }, [pinnedBooks]);

  return (
    <Router>
      <div className="container">
        <Header
          search={search}
          setSearch={setSearch}
          onSearch={searchFunction}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/search-results"
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
