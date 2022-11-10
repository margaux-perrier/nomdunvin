import React, {useState} from 'react';
import { getCart, getTotalPrice } from '../../utils';
import CartItem from '../CartItem/CartItem';
import './CartPage.scss';

function CartPage(){

    const [cart, setCart] = useState(getCart());
    const [total, setTotal] = useState(getTotalPrice(cart)); 

    return (
        <main className = 'cart-container'>
            <div>
            <h1 className = 'cart-container_title'>Votre panier</h1>
            <p className = 'cart-container_subtitle'>Dernière étape avant de profiter de vos achats !</p>
            </div>
           
            <div className='cart-container_itemList'>
                {cart.map(({id, img, name, price, quantity, winemaker}) => (
                    <CartItem 
                    key = { id }
                    id = {id}
                    img = { img }
                    name = { name }
                    price = { price }
                    winemaker = { winemaker }
                    oldQuantity = { quantity }
                    setTotal = { setTotal } 
                    setCart = { setCart }
                    /> 
                    ))
                } 
            </div>
            <div className = 'cart_amount'>
                <p>Total : </p><span> {total}€ T.T.C</span>
            </div>
            <div className = 'buttons-container'>
                    <button className='validate_button button'>Valider mon panier</button>
                    <button className='delete_button button'>Vider mon panier</button>
            </div>
        </main>
       
    )
}

export default React.memo(CartPage);