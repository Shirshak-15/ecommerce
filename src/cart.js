import React from 'react';
import './App.css'; 


const Cart = (props) => {
  
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

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
  const totalPrice = cartItems.reduce(
    (total, item) => total + +item.price,
    0
  );
  console.log(props.cart);
  

 
  return (
    
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name}: Rs {item.price}
            <button onClick ={()=>addItem(item)}style={{backgroundColor:'green'}}>Add➕</button>
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
