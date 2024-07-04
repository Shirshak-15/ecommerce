
import React from 'react';
import Cartfooter from './cartfooter';

const Groceries = (props) => {
    const handleclick = (newitem) => {
        props.setcart(previtem=>[...previtem, newitem]);
        
    }

    return (
        <div>
        <div className="centerDiv">GROCERIES</div>
        
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


