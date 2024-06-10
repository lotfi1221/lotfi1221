import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table, Container } from 'react-bootstrap';

function ClientList() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/clients')
            .then(response => setClients(response.data))
            .catch(error => console.error('There was an error fetching the clients!', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/clients/${id}`)
            .then(() => setClients(clients.filter(client => client._id !== id)))
            .catch(error => console.error('There was an error deleting the client!', error));
    };

    return (
        <Container>
            <h1>Clients</h1>
            <Link to="/add-client">
                <Button variant="primary" className="mb-3">Add Client</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client._id}>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(client._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default ClientList;
