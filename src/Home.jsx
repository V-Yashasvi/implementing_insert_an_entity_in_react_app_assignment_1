// src/components/Home.jsx
import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="home-container">
        <h1>Book Library</h1>
        <div className="books-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <Link to='/add-book'>
          <button>
            Add a book
          </button>
        </Link>
      </div>
  );
};

export default Home;
