// On ne peut pas stocker de données complexes dans le localstorage : uniquement des chaînes de caractères 
// => JSON; stringify : transforme notre tableau ou objet en JSON et JSON.parse = fait l'inverse

export function saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart)); 
}; 

export function getCart(){
    let cart = localStorage.getItem('cart'); 
    if(cart == null){
        return []; 
    }else{
        return JSON.parse(cart); 
    }
  
}; 

/**  @function 
* Add wine to cart 
* @param {Object}  wine - wine add to cart
* @param {Number}  quantity - quantity of wine add to cart
*/
export function addWineToCart(wine, quantity){
    let cart = getCart(); 
    console.log('cart', cart); 
    console.log('>>>>>', cart.find(item => Number(item.id) == Number(wine.id))); 
    let foundWine = cart.find(item => Number(item.id) == Number(wine.id)); 
    console.log('foundWine', foundWine); 
    if(!foundWine){
        console.log(wine); 
        wine.quantity = Number(quantity); 
        cart.push(wine);  
    }else{
        foundWine.quantity += Number(quantity)  
    }
    saveCart(cart); 
};

/** @function 
* Remove wine with from cart 
* @param {Object}  wine - wine remove to cart
*/
export function removeWineFromCart(wineId){
    let cart = getCart(); 
    cart = cart.filter(item =>item.id !== wineId); 
    saveCart(cart); 
}; 


/** @function 
* Modify quantity of wine in cart - when user modify wine's quantity from the cart page
* @param {Object}  wine - wine remove to cart
* @param {Number}  quantity - wine's quantity in cart
*/
export function updateQuantity(wineId, quantity){
    let cart = getCart(); 
    let foundWine = cart.find(item => item.id === wineId);
    console.log('quantity', quantity); 

    if(foundWine){
        foundWine.quantity = Number(quantity); 
        if(Number(foundWine.quantity) <= Number(0)){
            removeWineFromCart(foundWine.id); 
            console.log('id', foundWine.id); 
        }else{
            saveCart(cart); 
        }
    }
     saveCart(cart); 
}; 

/** @function 
* Delete cart from localStorage 
*/
export function deleteCart(){
    localStorage.removeItem('cart'); 
}; 


/** @function 
* Get cart's total quantity 
*/
export function getTotalQuantityOfWineInCart(){
    let cart = getCart(); 
    let totalQuantity = 0; 
    for(let wine of cart){
        totalQuantity += wine.quantity; 
    }
    return totalQuantity; 
}; 

/** @function 
* Get cart's total price 
*/
export function getTotalPrice(){
    let cart = getCart(); 
    let total = 0; 
    for(let wine of cart){
        total += wine.quantity * wine.price
    }
    return total; 
}


