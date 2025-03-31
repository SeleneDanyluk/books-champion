import { useState } from "react";
import "./App.css";
import Books from "./components/books/Books";
import NewBook from "./components/newBook/NewBook";
import booksInitial from "./data/books";

function App() {

  const [books, setBooks] = useState(booksInitial);
  const handleBookAdded = (enteredBook) => {
    console.log(enteredBook);
    const bookData = {
      ...enteredBook,
      id: Math.random().toString(),
      bookRating: Array(enteredBook.rating).fill("*"),  
    };
    setBooks((prevBooks) => {
      return [...prevBooks, bookData];
    });
  };

  return (
    <>
      <div className="container justify-content-center my-5">
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
      <NewBook onBookAdded={handleBookAdded} />
      </div>
      <div>
      <Books books={books}/>
      </div>
    </>
  );
}

export default App;
