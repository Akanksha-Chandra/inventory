// src/components/Order/ViewAllOrders.js
import React from 'react';

const ViewAllOrders = () => {
  const orders = [
    { itemCode: 'ITEM001', itemName: 'Sarridon', quantity: 20, deliveryDate: '2024-09-10', status: 'Completed' },
    { itemCode: 'ITEM002', itemName: 'Paracetamol', quantity: 100, deliveryDate: '2024-09-12', status: 'Pending' },
    // Add more orders as necessary
  ];

  return (
    <div className="container">
      <h2>All Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Delivery Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.itemCode}</td>
              <td>{order.itemName}</td>
              <td>{order.quantity}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllOrders;
