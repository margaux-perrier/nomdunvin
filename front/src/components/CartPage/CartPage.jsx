import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartPage.scss';

function CartPage(){
    return (
        <main className = 'cart-container'>
            <div>
            <h1 className = 'cart-container_title'>Votre panier</h1>
            <p className = 'cart-container_subtitle'>Dernière étape avant de profiter de vos achats !</p>
            </div>
           
            <div className='cart-container_itemList'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/> 
            </div>
            <div className = 'cart_amount'>
                <p>Total : </p><span> 50€ T.T.C</span>
            </div>
            <div className = 'buttons-container'>
                    <button className='validate_button button'>Valider mon panier</button>
                    <button className='delete_button button'>Vider mon panier</button>
            </div>
        </main>
       
    )
}

export default React.memo(CartPage);