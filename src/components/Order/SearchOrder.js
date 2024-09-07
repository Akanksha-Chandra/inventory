// src/components/Order/SearchOrder.js
import React, { useState } from 'react';

const SearchOrder = () => {
  const [itemCode, setItemCode] = useState('');
  const [order, setOrder] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Dummy data for search functionality
    const orders = [
      { itemCode: 'ITEM001', itemName: 'Sarridon', quantity: 20, deliveryDate: '2024-09-10', status: 'Completed' },
      { itemCode: 'ITEM002', itemName: 'Paracetamol', quantity: 100, deliveryDate: '2024-09-12', status: 'Pending' },
    ];

    const foundOrder = orders.find((o) => o.itemCode === itemCode);
    setOrder(foundOrder || 'Order not found.');
  };

  return (
    <div className="container">
      <h2>Search Order</h2>
      <form onSubmit={handleSearch}>
        <label>Item Code:</label>
        <input
          type="text"
          value={itemCode}
          onChange={(e) => setItemCode(e.target.value)}
          placeholder="Enter Item Code"
          required
        />
        <button type="submit">Search</button>
      </form>

      {order && typeof order === 'object' ? (
        <div className="order-details">
          <h3>Order Details</h3>
          <p><strong>Item Code:</strong> {order.itemCode}</p>
          <p><strong>Item Name:</strong> {order.itemName}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
      ) : (
        <p>{order}</p>
      )}
    </div>
  );
};

export default SearchOrder;
