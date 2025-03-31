import React from 'react'
import { Form } from 'react-bootstrap'

const BookSearch = ({search, onSearch}) => {

    const handleBookSearch = (event) => {
        onSearch(event.target.value)
    };

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Buscador de libros</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa título"
                    onChange={handleBookSearch}
                    value={search}
                />
            </Form.Group>
        </div>
    )
}

export default BookSearch