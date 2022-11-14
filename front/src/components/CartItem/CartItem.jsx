// import React
import React, { Fragment, useState } from 'react';  

// import PropTypes
import PropTypes from 'prop-types';

//import cart manage functions
import { updateQuantity, removeWineFromCart, getCart, getTotalPrice} from '../../utils'; 

//css
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
   
    const [ quantity, setQuantity] = useState(oldQuantity);

    const handleQuantity = (e) => {
        setQuantity(e.target.value); 
        updateQuantity(id, e.target.value);
        setTotal(getTotalPrice());
    }

    return(
        <Fragment>

        <div class="ui fitted divider"></div>
                <div className = 'cart-item'>
                    <img className = 'cart-item_image' src={ avatar } alt='bouteille'/>
                    <div className='cart-item_infos'>
                        <h2 className='cart-item_name'>{ `${winemaker.name} - ${name}` }</h2>
                        <span className = 'cart-item_price'>{ price }€ TTC</span>
                        <span className = 'cart-item_subtotal'>sous-total : {price * quantity} € TTC</span>
                    </div>
                    <div className='cart-item_quantity'>
                        <input className='cart-item_quantity-input' type="number" min='1' name='quantity' value={ quantity } onChange={handleQuantity} />
                        <i class="trash red icon" onClick={() => handleRemoveWine(id)}></i>
                    </div>
                </div>


        </Fragment>
    )
}

export default React.memo(CartItem);


// * LES PROPTYPES * //

// CartItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     size: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     alcohol: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     winemaker: PropTypes.string.isRequired,
//     appellation: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//     culture: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             id: PropTypes.number.isRequired,
//         })
//     ).isRequired,
// };
