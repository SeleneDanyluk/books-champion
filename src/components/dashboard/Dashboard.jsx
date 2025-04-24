import React from 'react'
import NewBook from '../newBook/NewBook';
import Books from '../books/Books';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(data => setBooks([...data]))
      .catch(error => console.log(error))
  }, []);

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

    <div className="container justify-content-center my-5">
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
      <NewBook onBookAdded={handleBookAdded} />
      <div>
        <Books books={books} />
      </div>

    </div>

  )
}

export default Dashboard