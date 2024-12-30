# StoryStack - Book Search & Pinning App

StoryStack is a web app that allows users to search for books via the Google Books API, view search results, and pin their favorite books and form a collection. Pinned books are saved locally so users can access them even after page reloads. Users can also unpin books from their collection.

## Features

- **Search for Books:** Search books by title, author, or keywords using the Google Books API.
- **Pin Books:** Pin books you like and save them to a collection.
- **View Pinned Books:** Easily access pinned books from a separate page.
- **Local Storage Support:** Pinned books are saved in local storage, so they persist even after a page reload.
- **Responsive Design:** The app is fully responsive and works across different screen sizes.

## Tech Stack

1. React: Front-end JavaScript library for building user interfaces.
2. React Router: For managing navigation between pages.
3. Axios: To make HTTP requests to the Google Books API.
4. LocalStorage: To persist pinned books across sessions.

You can view the project [here](https://storystack.vercel.app)

## Usage

Use the search bar to find books by title, author, or keyword. Click the "Pin Book" button next to a book to add it to your pinned books collection. Pinning a book means you're saving the book to be read later. Navigate to the "Pinned Books" page to see all your pinned books. Click the "Unpin" button next to any pinned book to remove it from your collection when you are done reading.

## Concepts

This project covered the following concepts:

1. The use of state and props in React.
2. How to link pages in React with React Router.
3. Fetching from an API with React.
4. Responsive web design with Vanilla CSS.

## License

This project is open-source and available under the MIT License.
