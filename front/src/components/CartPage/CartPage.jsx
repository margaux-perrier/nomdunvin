import React, {Fragment, useState} from 'react';
import { deleteCart, getCart, getTotalPrice, removeWineFromCart } from '../../utils';
import CartItem from '../CartItem/CartItem';
import './CartPage.scss';

function CartPage(){

    const [cart, setCart] = useState(getCart());
    const [total, setTotal] = useState(getTotalPrice(cart)); 

    const handleDeleteCart = () => {
        deleteCart(); 
        setCart(getCart());
    }

    const handleRemoveWine = (id) => {
        removeWineFromCart(id);
        const newCart = getCart(); 
        setCart(newCart); 
        setTotal(getTotalPrice(cart))
    }

    return (
        <main className = 'cart-container'>
            <div>

            {cart.length === 0 ? 
            <div class="ui brown message">Votre panier est vide</div>
            :
            <Fragment>
                <h1 className = 'cart-container_title'>Votre panier</h1>
                <p className = 'cart-container_subtitle'>Dernière étape avant de profiter de vos achats !</p>

                <div className='cart-container_itemList'>
                    {cart.map(({id, avatar, name, price, quantity, winemaker}) => (
                        <CartItem 
                        key = { id }
                        id = {id}
                        avatar = {avatar}
                        name = { name }
                        price = { price }
                        winemaker = { winemaker}
                        oldQuantity = { quantity }
                        setTotal = { setTotal } 
                        handleRemoveWine={ handleRemoveWine }
                        /> 
                        ))
                    } 
                </div>
                <div className = 'cart_amount'>
                    <p>Total : </p><span> {total}€ T.T.C</span>
                </div>
                <div className = 'buttons-container'>
                        <button className='validate_button button'>Valider mon panier</button>
                        <button className='delete_button button' onClick={handleDeleteCart}>Vider mon panier</button>
                </div>
            </Fragment>
        }
        </div>
        </main>
       
    )
}

export default React.memo(CartPage);