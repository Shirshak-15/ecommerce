import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css'

const Cartfooter=()=>
{
    const navigate=useNavigate();
    const handleclick=()=>{
        navigate('/cart');
    }
    return(<div onClick={handleclick} className="footer">Head to check-out🛒</div>)
}
export default Cartfooter;