import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

const BookItem = ({ id, title, author, rating, pages, summary, imageUrl, available, onDeleteBook }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`, {
      state: {
        book: {
          title,
          author,
          rating,
          pages,
          imageUrl,
          summary,
          available
        },
      },
    })
  };

  return (

    <div>
      <Card style={{ width: "22rem" }}>
        <Card.Img
          height={400}
          variant="top"
          src={imageUrl !== null ? imageUrl : "https://bit.ly/47NylZk"}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <h2>{rating} Estrellas</h2>
          <p>{pages} páginas</p>
          <Button onClick={handleClick}> Ver detalles</Button>
          {/* <Button onClick={handleDelete} variant="danger">
            Eliminar libro</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookItem;
