import React from 'react';
import data from '../../data';

// Fatura bileşeni
const Invoice = ({ cart, totalAmount }) => {
  const invoiceItems = Object.keys(cart).map((productId) => {
    const product = data.find(p => p.id === parseInt(productId, 10));
    if (!product) return null;

    return (
      <tr key={productId}>
        <td>{product.title}</td>
        <td>{cart[productId]}</td>
        <td>${(product.price * cart[productId]).toLocaleString()}</td>
      </tr>
    );
  });

  return (
    <div className='invoice'>
      <h2>Invoice</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems}
          <tr>
            <td colSpan="2"><strong>Total</strong></td>
            <td><strong>${totalAmount.toLocaleString()}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
