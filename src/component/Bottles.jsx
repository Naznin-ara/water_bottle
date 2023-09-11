
import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addtoLs,  getItem, removeFromLs } from '../utilities/localstorage';

const Bottles = () => {
    const [bottle, setBottle] = useState([]);
    const [cart, setCart] = useState([]);
   


    const handlePurchase = (item) =>{
       const newcart =[...cart, item]
        setCart(newcart);
        addtoLs(item.id)
     }

     const handleremove = (item) =>{
     console.log(item)
     removeFromLs(item.id)
    let removeItem = cart.filter(e=> e.id !== item.id)
   return setCart(removeItem);
     }

    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottle(data))
    },[])

    useEffect(()=>{
        if(bottle.length){
            const product = getItem();
            const savedCart = [];
            // console.log(product, bottle)
            for(let id of product){
                console.log(id)
              let finalproduct=  bottle.find(item => item.id === id)
                if( finalproduct){
                    savedCart.push( finalproduct)
                }
            }
            console.log(savedCart);
            setCart(savedCart)
        }

    
    },[bottle])
    return (
        <div>
            <h1 className='text-center text-3xl'>Bottles: {bottle.length}</h1>

            <div  className='flex gap-4 justify-center items-start'>
            <div className="grid grid-cols-3 gap-4 w-[70%] my-10">
                {
                    bottle.map((bottle,idx) =>  <Bottle 
                    key={idx}
                    bottle={bottle}
                    handlePurchase = {handlePurchase}>
                     </Bottle>)
                }
            </div>
             <div className='w-[25%] h-[700px] shadow-lg bg-gray-100 mt-10 rounded-md'  >
             <h1 className='text-center text-3xl mt-4'>Items: {cart.length}</h1>
            
            {
                cart.map((item,idx) => <div  className='flex justify-center items-center gap-4 my-4 bg-gray-200' key={idx}><h1 className='text-sm'> {item.name}</h1>
                <img src={item.img} className='w-[50px] '/>
                <button className='bg-black text-white px-2 py-1 rounded-md text-sm' onClick={()=>handleremove(item)}>Remove</button>
                </div>)
            }
             </div>
            </div>
           
           
        </div>
    );
};

export default Bottles;