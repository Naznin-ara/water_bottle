const getItem = () =>{
    const shoppingcart = localStorage.getItem('cart');
    if(shoppingcart){
    return JSON.parse(shoppingcart);

    }
    return [];
    
}

const setItem = (item) =>{
    const cartstringify = JSON.stringify(item)
    return localStorage.setItem('cart', cartstringify);
}

const addtoLs = (id) =>{
    const cart = getItem();
    cart.push(id);
    return setItem(cart);


}


const removeFromLs = (id) =>{
    const cart = getItem();
    const remaining = cart.filter(item => item !== id)
    return setItem(remaining)
}
// function countItem(id){
//     const div = document.getElementById(id);
//     let count = div.childElementCount;
//     return count;
// }
export {addtoLs, getItem, removeFromLs};