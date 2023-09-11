
import React, { useState } from 'react';

const Bottle = ({bottle, handlePurchase}) => {
    const {name, img, price} = bottle;
    

   
    return (
        <div>
            <div className="card h-[450px] bg-gray-50 shadow-xl">
  <figure><img src={img} className='w-full h-[250px]'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price: $ {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handlePurchase(bottle)}>Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bottle;