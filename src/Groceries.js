
import React from 'react';

const Groceries = (props) => {
    const handleclick = (newitem) => {
        props.setcart(previtem=>[...previtem, newitem]);
    }

    return (
        <div>
        <div className="centerDiv">GROCERIES</div>
        
        {props.list.map((e)=>{ return<div key={e.name}>
            <div>{e.name} Rs:{e.price}</div>
            
            <button onClick={() => handleclick({ name:`${e.name}` , price: `${e.price}` })}>add</button>

            </div>

        })}
            
            {console.log(props.cart)}
        </div>
    );
}

export default Groceries;


