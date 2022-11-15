//import from React
import React, {Fragment, useState} from 'react';
//import cart manage functions
import { deleteCart, getCart, getTotalPrice, removeWineFromCart } from '../../utils';
//import components
import CartItem from '../CartItem/CartItem';
//import request API
import { makeOrder } from '../../services/WineApi';
//import css
import './CartPage.scss';

function CartPage(){

    const [cart, setCart] = useState(getCart());
    const [total, setTotal] = useState(getTotalPrice(cart)); 
    const [message, setMessage]= useState('');

    const handleDeleteCart = () => {
        deleteCart(); 
        setCart(getCart());
    }

    const handleRemoveWine = (id) => {
        removeWineFromCart(id);
        const newCart = getCart(); 
        setCart(newCart); 
        setTotal(getTotalPrice(cart));
    }

    const handleSubmitOrder = async ( order) => {
        order= getCart();        
        const response = await makeOrder(order);
      
        if (response.success) {
            setMessage('Votre commande a bien été passée');
            deleteCart();
            setCart(getCart());
        } 
    }

    return (
        <main className = 'cart-container'>
             <Fragment>

            { message && (
            <div className="ui green message">{ message }</div>
            ) }

            { cart.length === 0 ? 
                <div class="ui brown message">Votre panier est vide</div>
            :
                <Fragment>
                    <h1 className = 'cart-container_title'>Votre panier</h1>
                    <p className = 'cart-container_subtitle'>Dernière étape avant de profiter de vos achats !</p>

                    <div className='cart-container_itemList'>
                        {cart.map(({ id, avatar, name, price, quantity, winemaker }) => (
                            <CartItem 
                                key = { id }
                                id = { id }
                                avatar = { avatar }
                                name = { name }
                                price = { price }
                                winemaker = { winemaker }
                                oldQuantity = { quantity }
                                setTotal = { setTotal } 
                                handleRemoveWine={ handleRemoveWine }
                            /> 
                        ))
                    } 
                    </div>

                    <div className = 'cart_amount'>
                        <p>Total : </p> <span> {total}€ T.T.C</span>
                    </div>

                    <div className = 'buttons-container'>
                        <button
                            className='validate_button button'
                            onClick={handleSubmitOrder}
                        >
                            Valider mon panier
                        </button>

                        <button className='delete_button button' onClick={handleDeleteCart}>
                            Vider mon panier
                        </button>
                    </div>
                </Fragment>
            }
            </Fragment>
        </main>  
    )
};

export default React.memo(CartPage);