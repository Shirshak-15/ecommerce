import React from 'react';
import './App.css'; 

const Cart = (props) => {
  
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  
  const groupItems = (cart) => {
    const grouped = cart.reduce((acc, item) => {
      const found = acc.find(i => i.name === item.name);
      if (found) {
        found.count += 1;
      } else {
        acc.push({ ...item, count: 1 });
      }
      return acc;
    }, []);
    return grouped;
  };

  
  const deleteItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    props.setcart(updatedCart);
  };

  
  const addItem = (newItem) => {
    const updatedCart = [...cartItems, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    props.setcart(updatedCart);
  };

  
  const totalPrice = cartItems.reduce((total, item) => total + +item.price, 0);

  
  const groupedItems = groupItems(cartItems);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      <ul>
        {groupedItems.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name}: Rs {item.price} (x{item.count})
            <button onClick={() => addItem(item)} style={{backgroundColor:'green'}}>Add➕</button>
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
