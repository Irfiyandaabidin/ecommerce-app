import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../services/appApi";

const Signup = () => {
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ name, setName] = useState('');
  const [ signup, { error, isLoading, isError}] = useSignupMutation();

  const handleSignup = (e) => {
    e.preventDefault();
    signup({ name, email, password })
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSignup}>
            <h1>Create an account</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                id="name"
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button type="submit" disabled={isLoading} className="my-3">Creat account</Button>
            </Form.Group>
            <p>
              Don't have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
