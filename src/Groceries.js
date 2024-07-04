
import React, { useState } from 'react';
import Cartfooter from './cartfooter';


const Groceries = (props) => {
    const handleclick = (newitem) => {
        props.setcart(previtem=>[...previtem, newitem]);
        
    }
    const[sortstatus, setSortstatus]=useState(false);
    const handlesort=()=>{
        setSortstatus(true);
    }
    const handlesec=()=>{
        setSortstatus(false);
    }
    sortstatus&&props.list.sort((a,b)=>a.price-b.price)
    !sortstatus&&props.list.sort((a,b)=>b.price-a.price)

    return (
        <div>
        <div className="centerDiv">GROCERIES</div>
        <button className="conditionbutton" onClick={handlesort}>sort-by-price(ascending)</button>
    <button className="conditionbutton" onClick={handlesec}>sort-by-price(descending)</button>
        <div className='itempage'>{props.list.map((e)=>{ return<div className='itemcard'  key={e.name} > 
            <p>{e.name}</p><p>Rs:{e.price}</p> 
            
            <button className='itembutton' onClick={() => handleclick({ name:`${e.name}` , price: `${e.price}` })}>add</button>

               </div>

        })}</div>
            
          
            <Cartfooter/>
        </div>
    );
}

export default Groceries;


