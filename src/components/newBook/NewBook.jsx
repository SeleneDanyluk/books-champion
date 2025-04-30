import React from 'react'
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router';

const NewBook = ({ onBookAdded }) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [pageCount, setPageCount] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [available, setAvailable] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }
    const handlePageCountChange = (event) => {
        setPageCount(event.target.value)
    }

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    }

    const handleAvailabilityChange = (event) => {
        setAvailable(event.target.checked);
    }

    const handleAddBook = async (e) => {
        e.preventDefault();
      
        const bookData = {
          title,
          author,
          rating: parseInt(rating, 10),
          pageCount: parseInt(pageCount, 10),
          summary: "",
          imageUrl,
          available
        };
      
        try {
          const res = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookData)
          });
      
          if (!res.ok) throw new Error("Falló crear libro");
      
          const newBook = await res.json();
          onBookAdded(newBook);
          setTitle("");
          setAuthor("");
          setRating("");
          setPageCount("");
          setImageUrl("");
          setAvailable(false);
        } catch (err) {
          console.error(err);
        }
      };

      const handleBackToBooks = () => {
        navigate("/libros")
      }
      
    return (
        <Card bg="success" >
            <Card.Body>
                <Form className="text-white" onSubmit={handleAddBook}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Título</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Ingresar título" 
                                onChange={handleChangeTitle} 
                                value={title}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="author">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control 
                                type="text"
                                placeholder="Ingresar autor"
                                onChange={handleAuthorChange} 
                                value={author}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                    onChange={handleRatingChange}
                                    value={rating}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="pageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                    onChange={handlePageCountChange}
                                    value={pageCount}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Ingresar url de imagen"
                            onChange={handleImageUrlChange} 
                            value={imageUrl}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                type="switch"
                                id="available"
                                className="mb-3"
                                label="¿Disponible?"
                                onChange={handleAvailabilityChange}
                                checked={available}
                                value={available}
                            />
                            <Button variant="primary" type="submit">
                                Agregar lectura
                            </Button>
                            <Button variant="secondary" onClick={handleBackToBooks}>
                                Volver
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default NewBook