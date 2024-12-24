import React from "react";

export default function Body({ books, loading, error }) {
  return (
    <div className="body">
      <h2>You don't have any books pinned yet</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="book-lists">
        {books.length > 0 ? (
          books.map(book => (
            <div key={book.id} className="book-item">
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors}</p>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}
