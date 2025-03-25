import "./App.css";
import BookItem from "./components/bookItem/BookItem";
import books from "./data/books";

function App() {
  return (
    <>
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
      {books.map((book, index) => (
        <BookItem
          key={index}
          bookTitle={book.bookTitle}
          author={book.bookAuthor}
          rating={book.bookRating}
          pages={book.pageCount}
          imageUrl={book.imageUrl}
        />
      ))}
    </>
  );
}

export default App;
