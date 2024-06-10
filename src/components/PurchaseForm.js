// src/components/PurchaseForm.js
import React, { useState } from 'react';

const PurchaseForm = ({ onSubmit }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ product, quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Produit:</label>
        <input 
          type="text" 
          value={product} 
          onChange={(e) => setProduct(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Quantité:</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default PurchaseForm;
