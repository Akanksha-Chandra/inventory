// src/components/Inventory/ViewAllItems.js
import React from 'react';

function ViewAllItems() {
  const items = [
    { itemCode: 'ITEM001', itemName: 'Sarridon', description: 'Pain Relief', price: 50, quantity: 100 },
    // Add more items here
  ];

  return (
    <div className="container">
      <h2>Inventory List</h2>
      <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemCode}</td>
              <td>{item.itemName}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllItems;
