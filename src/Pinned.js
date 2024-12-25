import React from "react";

export default function Pinned({ pinnedBooks }) {
  return (
    <div className="pinned-books">
      <h2>Pinned Books</h2>
      <div className="book-lists">
        {pinnedBooks.length > 0 ? (
          pinnedBooks.map(book => (
            <div key={book.id} className="book-item">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                style={{ width: 100, height: 150 }}
              />
              <div className="book-text">
                <h3>{book.volumeInfo.title}</h3>
                <p className="authors">{book.volumeInfo.authors?.join(", ")}</p>
                <p className="book-description">
                  {book.volumeInfo.description
                    ? `${book.volumeInfo.description.slice(0, 300)}...`
                    : "No description available."}
                </p>
                <button className="pin">Pin Book</button>
              </div>
            </div>
          ))
        ) : (
          <h2>You don't have any books pinned yet</h2>
        )}
      </div>
    </div>
  );
}
