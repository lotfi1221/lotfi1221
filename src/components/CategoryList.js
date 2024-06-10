import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ListGroup, Container, Card } from 'react-bootstrap';

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error('There was an error fetching the categories!', error));
    }, []);

    return (
        <Container>
            <h1>Category List</h1>
            <ListGroup>
                {categories.map(category => (
                    <ListGroup.Item key={category._id}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>{category.name}</span>
                                    <Button variant="danger" onClick={() => handleDelete(category._id)}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/categories/${id}`)
            .then(() => setCategories(categories.filter(category => category._id !== id)))
            .catch(error => console.error('There was an error deleting the category!', error));
    }
}

export default CategoryList;
