import React, {Fragment, useState, useContext} from 'react';
import { loginContext } from '../../Context/loginContext';
import { deleteCart, getCart, getTotalPrice } from '../../utils';
import CartItem from '../CartItem/CartItem';
import './CartPage.scss';

function CartPage(){

    const [cart, setCart] = useState(getCart());
    const [total, setTotal] = useState(getTotalPrice(cart)); 
    const { isLogged } = useContext(loginContext);

    const handleDeleteCart = () => {
        deleteCart(); 
        setCart(getCart());
    }

    return (
        <main className = 'cart-container'>
            <div>

            {cart.length === 0 || !isLogged? 
            <div className="ui brown message">Votre panier est vide</div>
            :
            <Fragment>
                <h1 className = 'cart-container_title'>Votre panier</h1>
                <p className = 'cart-container_subtitle'>Dernière étape avant de profiter de vos achats !</p>

                <div className='cart-container_itemList'>
                    {cart.map(({ id, avatar, name, price, quantity, winemaker }) => (
                        <CartItem 
                        key = { id }
                        id = { id }
                        avatar = {avatar}
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
                        <button className='delete_button button' onClick={handleDeleteCart}>Vider mon panier</button>
                </div>
            </Fragment>
        }
        </div>
        </main>
       
    )
}

export default React.memo(CartPage);