import React from 'react'
import { Container } from 'react-bootstrap'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-light py-3 mt-5">
                <Container className="text-center">
                    <p className="mb-0">
                        <FaCopyright className="me-1" /> {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </Container>
            </footer>
        </div>
    )
}

export default Footer