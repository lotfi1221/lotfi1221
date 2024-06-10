import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ListGroup, Container, Form, Card } from 'react-bootstrap';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('There was an error fetching the products!', error));
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <h1>Product List</h1>
            <Form className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>
            <ListGroup>
                {filteredProducts.map(product => (
                    <ListGroup.Item key={product._id}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>{product.name} - ${product.price} - Stock: {product.stock}</span>
                                    <div>
                                        <Button variant="primary" as={Link} to={`/edit-product/${product._id}`} className="me-2">Edit</Button>
                                        <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(() => setProducts(products.filter(product => product._id !== id)))
            .catch(error => console.error('There was an error deleting the product!', error));
    }
}

export default ProductList;
