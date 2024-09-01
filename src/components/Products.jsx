

import React, { useState, useEffect } from 'react';
import data from '../../data';
import Money from './Money';
import Invoice from './Invoice'; // Invoice bileşenini içe aktar

const Products = () => {
  const [money, setMoney] = useState(100000000000);
  const [cart, setCart] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const handleBuy = (product) => {
    if (money >= product.price) {
      setCart(prevCart => ({
        ...prevCart,
        [product.id]: (prevCart[product.id] || 0) + 1
      }));
      setMoney(prevMoney => prevMoney - product.price);
    }
  };

  const handleSell = (product) => {
    setCart(prevCart => {
      const newCart = (prevCart[product.id] || 0) - 1;
      return {
        ...prevCart,
        [product.id]: Math.max(newCart, 0)
      };
    });
    setMoney(prevMoney => prevMoney + product.price);
  };

  // Fatura hesaplamasını güncelle
  useEffect(() => {
    const calculateTotalAmount = () => {
      return Object.keys(cart).reduce((total, productId) => {
        const product = data.find(p => p.id === parseInt(productId, 10));
        return total + (product.price * cart[productId]);
      }, 0);
    };
    setTotalAmount(calculateTotalAmount());
  }, [cart]);

  return (
    <div>
      <Money money={money} />
      <div className='products-container'>
        {data.map((product) => (
          <div className='products' key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.picture} alt={product.title} />
            <p className='p1'>${product.price.toLocaleString()}</p>
            <div className='btns'>
              <button
                onClick={() => handleBuy(product)}
                className='buy'
                disabled={money < product.price}
              >
                Buy
              </button>
              <input
                type="number"
                min='0'
                value={cart[product.id] || 0}
                className='input'
                readOnly
              />
              <button
                onClick={() => handleSell(product)}
                className='sell'
                disabled={!(cart[product.id] > 0)}
              >
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>
      <Invoice cart={cart} totalAmount={totalAmount} />
    </div>
  );
};

export default Products;
