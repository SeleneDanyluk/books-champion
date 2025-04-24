import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

const BookItem = ({ bookTitle, author, rating, pages, imageUrl }) => {
  const [title, setTitle] = useState(bookTitle);
  const handleTitle = () => {
    setTitle("Titulo actualizado!");
  };

  const handleDelete = () => {
    setShow(true)
  }
  

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
          <Button onClick={handleTitle}> Actualizar titulo</Button>
          <Button onClick={handleDelete} variant="danger">
            Eliminar libro</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookItem;
