import './App.css';
import Home from './Home';
import Electonics from './Electronics';
import Tools from './Tools';
import { Route,Routes } from 'react-router-dom';
import Groceries from './Groceries';
import Groc from './Groc';
import Too from './Too';
import Elecs from './Elec'
import Cart from './cart';
import { useEffect, useState } from 'react';



function App() {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const[cart, setCart]=useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  return (
 <div>
  <div className='centerDiv'>ECOMMERCE-WEBSITE</div>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='groceries' element={<Groceries list={Groc} cart={cart} setcart={setCart}/>}/>
    <Route path='electronics' element={<Electonics list={Elecs} cart={cart} setcart={setCart}/>}/>
    <Route path='tools' element={<Tools list={Too} cart={cart} setcart={setCart}/>}/>
    <Route path ='cart' element ={<Cart/>}></Route>
  </Routes>
    
  
 </div>
 
  );
}

export default App;
