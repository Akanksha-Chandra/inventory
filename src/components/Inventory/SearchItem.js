// src/components/Inventory/SearchItem.js
import React, { useState } from 'react';

function SearchItem() {
  const [itemCode, setItemCode] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const items = [
      { itemCode: 'ITEM001', itemName: 'Sarridon', description: 'Pain Relief', price: 50, quantity: 100 }
    ];
    const foundItem = items.find((item) => item.itemCode === itemCode);
    setResult(foundItem || 'Item not found');
  };

  return (
    <div className="container">
      <h2>Search Item</h2>
      <form onSubmit={handleSearch}>
        <label>Item Code</label>
        <input 
          type="text" 
          value={itemCode} 
          onChange={(e) => setItemCode(e.target.value)} 
          required 
        />
        <button type="submit">Search</button>
      </form>
      {result && (
        <div className="result">
          {typeof result === 'string' ? (
            <p>{result}</p>
          ) : (
            <div>
              <p><strong>Item Name:</strong> {result.itemName}</p>
              <p><strong>Description:</strong> {result.description}</p>
              <p><strong>Price:</strong> {result.price}</p>
              <p><strong>Quantity:</strong> {result.quantity}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchItem;
