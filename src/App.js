import './App.css';
import Home from './Home';
import Electonics from './Electronics';
import Tools from './Tools';
import { Route,Routes } from 'react-router-dom';
import Groceries from './Groceries';
import Groc from './Groc';
import { useState } from 'react';


function App() {
  const[cart, setCart]=useState([{}]);
  
  return (
 <div>
  <div className='centerDiv'>ECOMMERCE-WEBSITE</div>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='groceries' element={<Groceries list={Groc} cart={cart} setcart={setCart}/>}/>
    <Route path='electronics' element={<Electonics/>}/>
    <Route path='tools' element={<Tools/>}/>
    
  </Routes>
  
 </div>
 
  );
}

export default App;
