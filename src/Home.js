import React from "react";
import './App.css'
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();
    function handleGroclick()
    {
        navigate('/groceries');
    }
    function handleElecclick()
    {
        navigate('/electronics');
    }
    function handleToolsclick()
    {
        navigate('/tools');
    }
    
    return(<div className="pagediv">
        
        <div onClick={handleGroclick} className="grocerycategorydiv" >GROCERIES</div>
        <div onClick={handleElecclick} className="electroniccategorydiv">ELECTRONICS</div>
        <div onClick={handleToolsclick}className="toolscategorydiv">TOOLS</div>
        </div>);
}

export default Home;