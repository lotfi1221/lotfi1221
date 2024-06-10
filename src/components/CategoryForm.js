// src/components/CategoryForm.js
import React, { useState } from 'react';

const CategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom de la Catégorie:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default CategoryForm;
