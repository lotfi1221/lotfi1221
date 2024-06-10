// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ClientList from './components/ClientList';
import UserList from './components/UserList';
import Sales from './components/Sales';
import Purchases from './components/Purchases';
import Categories from './components/Categories';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Point de Vente</h1>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/add-product">Add Product</Link></li>
            <li><Link to="/product-list">Product List</Link></li>
            <li><Link to="/client-list">Client List</Link></li>
            <li><Link to="/user-list">User List</Link></li>
            <li><Link to="/sales">Sales</Link></li>
            <li><Link to="/purchases">Purchases</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/client-list" element={<ClientList />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
