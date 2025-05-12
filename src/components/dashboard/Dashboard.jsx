import React, { useEffect } from 'react'
import NewBook from '../newBook/NewBook';
import Books from '../books/Books';
import { useState } from 'react';
import fetchBooks from './dashboard.services';
import { Route, Routes, useLocation, useNavigate } from "react-router";
import BookDetails from '../bookDetails/BookDetails';
import { errorToast } from '../ui/toast/NotificationToast';

const Dashboard = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('book-champions-token')
    fetchBooks(token)
      .then(data => setBooks([...data]))
      .catch(error => errorToast(error))
  }, [])

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
      <Routes>
        <Route index element={<Books books={books} />} ></Route>
        <Route path='/:id' element={<BookDetails />}></Route>
        <Route path='agregar-libro' element={<NewBook onBookAdded={handleBookAdded} />}></Route>
      </Routes>
    </div>
  )
}

export default Dashboard