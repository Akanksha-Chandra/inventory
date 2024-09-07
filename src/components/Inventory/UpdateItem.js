// src/components/Inventory/UpdateItem.js
import React, { useState } from 'react';

function UpdateItem() {
  const [itemCode, setItemCode] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    // Update item logic
    console.log(`Updating item ${itemCode} with quantity ${quantity}`);
  };

  return (
    <div className="container">
      <h2>Update Item Quantity</h2>
      <form onSubmit={handleUpdate}>
        <label>Item Code</label>
        <input 
          type="text" 
          value={itemCode} 
          onChange={(e) => setItemCode(e.target.value)} 
          required 
        />

        <label>New Quantity</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateItem;
