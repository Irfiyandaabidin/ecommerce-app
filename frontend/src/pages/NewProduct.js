import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../services/appApi";
import "./NewProduct.css";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [imgToRemove, setImgToRemove] = useState(null);
  const navigate = useNavigate();
  const [createProduct, {isError, error, isLoading, isSuccess}] = useCreateProductMutation(); 
  return <div>
    <Container>
        <Row>
            <Col md={6} className="new-product__form--container">
                <Form style={{width: "100%"}}>
                 <h1>Create Product</h1>
                 {/* {isSuccess && <Alert variant="success">Product created with success</Alert>}
                 {isError && <Alert variant="danger">{error.data}</Alert>}
                 <Form.Group>
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" value={name} required onChange={(e) => setName[e.target.value]}></Form.Control>
                 </Form.Group> */}
                </Form>
            </Col>
            <Col md={6}>

            </Col>
        </Row>
    </Container>
    </div>;
};

export default NewProduct;
