import React from 'react';
import './App.css'; // Import your CSS file

const Cart = () => {
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const deleteItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + +item.price,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name}: Rs {item.price}
            <button onClick={() => deleteItem(index)}>Delete❌</button>
          </li>
        ))}
      </ul>
      <div className="total-section">
        Total: Rs {totalPrice}
      </div>
    </div>
  );
};

export default Cart;
