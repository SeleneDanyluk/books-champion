import React from 'react'

const BookItem = ({ bookTitle, author, rating, pages }) => {
  return (
    <div>
        <h2>{bookTitle}</h2>
        <h3>{author}</h3>
        <div>{rating} estrellas</div>
        <p>{pages} páginas</p>
    </div>
  )
}

export default BookItem