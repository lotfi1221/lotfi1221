import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

function PurchaseList() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/purchases')
            .then(response => setPurchases(response.data))
            .catch(error => console.error('There was an error fetching the purchases!', error));
    }, []);

    return (
        <Container>
            <h1>Purchases</h1>
            <Link to="/add-purchase">
                <Button variant="primary" className="mb-3">Add Purchase</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => (
                        <tr key={purchase._id}>
                            <td>
                                {purchase.products.map(item => (
                                    <div key={item.product._id}>{item.product.name}</div>
                                ))}
                            </td>
                            <td>
                                {purchase.products.map(item => (
                                    <div key={item.product._id}>{item.quantity}</div>
                                ))}
                            </td>
                            <td>{purchase.totalAmount}</td>
                            <td>{new Date(purchase.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default PurchaseList;
