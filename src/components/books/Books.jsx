import React from 'react'
import BookItem from '../bookItem/BookItem'

const Books = ({ books }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap my-5">
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
    </div>
  )
}

export default Books