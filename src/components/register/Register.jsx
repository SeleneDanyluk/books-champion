import React from 'react'
import { useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { validateEmail, validatePassword, validateString } from '../auth/auth.services';
import { errorToast, successToast } from '../ui/toast/NotificationToast';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({ email: false, password: false, name:false });
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!validateString(name, 1, 50)){
            setErrors({...errors, name:true})
            errorToast('El nombre es requerido y debe tener entre 1 y 50 caracteres')
            return
        }else{
            setErrors({...errors, name:false})
        }

        if (!validateEmail(email)) {
            setErrors({ ...errors, email: true });
            errorToast('El email es invalido')
            return;
        }else{
            setErrors({...errors, email:false})
        }

        if (!validatePassword(password, 8, 20, true, true)) {
            setErrors({ ...errors, password: true });
            errorToast('La contraseña debe tener entre 8 y 20 caracteres, al menos una mayuscula y 1 numero')
            return;
        }else{
            setErrors({...errors, password:false})
        }

        const newUser = {
            name,
            email,
            password
        };

        try {
            const res = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });

            if (!res.ok) {
                errorToast("Error al registrar usuario.")
            }

            const userId = await res.json();

            successToast("Usuario registrado exitosamente. Inicie sesión para continuar.")
            navigate("/login");

        } catch (err) {
            errorToast("Error al registar usuario.");
        }
    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="text"
                            required
                            placeholder="Ingresar nombre de usuario"
                            onChange={handleNameChange}
                            value={name}
                        />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            className={errors.email && 'border border-danger'}
                            required
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                        {errors.email && <p>El email es requerido.</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            className={errors.password && 'border border-danger'}
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        {errors.password && <p>El password es requerido.</p>}
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Registrarse
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Register