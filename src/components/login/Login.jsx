import { useState, useRef, useContext } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { validateEmail, validatePassword } from "../auth/auth.services";
import { errorToast, successToast } from "../ui/toast/NotificationToast";
import { AuthenticationContext } from "../services/auth.context";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: false, password: false });
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { handleUserLogin } = useContext(AuthenticationContext);

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrors({ ...errors, email: true });
            emailRef.current.focus();
            errorToast('Email invalido')
            return;
        } else {
            setErrors({ ...errors, email: false })
        }

        if (!validatePassword(password, 1)) {
            setErrors({ ...errors, password: true });
            errorToast('La contraseña es requerida')
            passwordRef.current.focus();
            return;
        } else {
            setErrors({ ...errors, password: false })
        }

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(token => {
                handleUserLogin(token);
                navigate("/libros");
            })
            .catch(err => {
                errorToast("Error al iniciar sesión.")
                return
            });
    };

    const handleNavigateToRegister = () => {
        navigate("/register");
    };

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            className={errors.email && 'border border-danger'}
                            required
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email}
                            ref={emailRef}
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
                            ref={passwordRef}
                        />
                        {errors.password && <p>El password es requerido.</p>}
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                        <Col md={6} className="justify-content-center">
                            <p>¿Aún no tienes una cuenta?</p>
                            <Button variant="primary" onClick={handleNavigateToRegister}>
                                Registrarse
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;