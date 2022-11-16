//import PropTypes
import PropTypes from 'prop-types';
//import React
import React, { Fragment, useState } from 'react';  
//import cart manage functions
import { updateQuantity, getTotalPrice } from '../../utils'; 
//import css
import './CartItem.scss';

function CartItem({
    avatar, 
    name, 
    price, 
    oldQuantity, 
    winemaker, 
    id, 
    setTotal, 
    handleRemoveWine,
}){
    //STATE
    const [ quantity, setQuantity] = useState(oldQuantity);

    //handle quantity and total price
    const handleQuantity = (e) => {
        setQuantity(e.target.value); 
        updateQuantity(id, e.target.value);
        setTotal(getTotalPrice());
    }

    return(
        
        <Fragment>
            <div className="ui fitted divider"></div>
            <div className = 'cart-item'>
                <img className = 'cart-item_image' src={ avatar } alt='bouteille'/>
                <div className='cart-item_infos'>
                    <h2 className='cart-item_winemaker-name'>{ `${ winemaker.name } ` }</h2>
                    <h2 className='cart-item_wine-name'>{ ` ${ name }` }</h2>
                    <span className = 'cart-item_price'>{ price }€ TTC</span>
                    <span className = 'cart-item_subtotal'>sous-total : {price * quantity} € TTC</span>
                </div>
                <div className='cart-item_quantity'>
                    <input className='cart-item_quantity-input' type="number" min='1' name='quantity' value={ quantity } onChange={ handleQuantity } />
                    <i className="trash red icon" onClick={ () => handleRemoveWine(id) }></i>
                </div>
            </div>
        </Fragment>
    )
};

export default React.memo(CartItem);

CartItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldQuantity: PropTypes.number.isRequired,
    winemaker: PropTypes.shape({
        name: PropTypes.string,
    }),
    id: PropTypes.number.isRequired,
    setTotal: PropTypes.func.isRequired,
    handleRemoveWine: PropTypes.func.isRequired,
};

