import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

function SaleList() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/sales')
            .then(response => setSales(response.data))
            .catch(error => console.error('There was an error fetching the sales!', error));
    }, []);

    return (
        <Container>
            <h1>Sales</h1>
            <Link to="/add-sale">
                <Button variant="primary" className="mb-3">Add Sale</Button>
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
                    {sales.map(sale => (
                        <tr key={sale._id}>
                            <td>
                                {sale.products.map(item => (
                                    <div key={item.product._id}>{item.product.name}</div>
                                ))}
                            </td>
                            <td>
                                {sale.products.map(item => (
                                    <div key={item.product._id}>{item.quantity}</div>
                                ))}
                            </td>
                            <td>{sale.totalAmount}</td>
                            <td>{new Date(sale.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default SaleList;
