import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"

const Login = () => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ width: "100%" }}>
            <h1>Login to your account</h1>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="my-3">Login</Button>
            </Form.Group>
            <p>
              Don't have an account? <Link to="/signup">Create Account</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="login__image--container">
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
