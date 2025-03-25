import { useState } from 'react'
import './App.css'
import BookItem from './components/bookItem/BookItem'
const books = [
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    rating: 4.8,
    pageCount: 417,
    available: true
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4.7,
    pageCount: 328,
    available: false
  },
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    rating: 4.9,
    pageCount: 96,
    available: true
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    rating: 4.5,
    pageCount: 863,
    available: true
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    rating: 4.6,
    pageCount: 256,
    available: false
  },
  {
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    rating: 4.8,
    pageCount: 374,
    available: true
  },
  {
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    rating: 4.7,
    pageCount: 279,
    available: true
  },
  {
    title: "Matar a un ruiseñor",
    author: "Harper Lee",
    rating: 4.9,
    pageCount: 324,
    available: false
  },
  {
    title: "El Hobbit",
    author: "J.R.R. Tolkien",
    rating: 4.8,
    pageCount: 310,
    available: true
  }];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
      {books.map((book, index) => (
        <BookItem
          key={index}
          title={book.title}
          author={book.author}
          rating={book.rating}
          pages={book.pageCount}
        />
      ))}
    </>
  )
}
export default App