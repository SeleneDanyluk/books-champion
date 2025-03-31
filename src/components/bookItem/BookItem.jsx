import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const BookItem = ({ bookTitle, author, rating, pages, imageUrl }) => {
  const [title, setTitle] = useState(bookTitle);
  const handleTitle = () => {
    setTitle("Titulo actualizado!");
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"} 
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating} estrellas</div>
        <p>{pages} páginas</p>
        <Button onClick={handleTitle}> Actualizar titulo</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
