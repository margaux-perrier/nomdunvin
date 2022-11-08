import React, {Fragment} from 'react'; 
import testImage from './blanc.png'; 
// import PropTypes
import PropTypes from 'prop-types';
import './CartItem.scss';
function CartItem(){
    return(
        <Fragment>

        <div class="ui fitted divider"></div>
                <div className = 'cart-item'>
                    <img className = 'cart-item_image' src={testImage} alt='bouteille'/>
                    <div className='cart-item_infos'>
                        <h2 className='cart-item_name'>Large soif blanc</h2>
                        <span className = 'cart-item_price'>11 € TTC</span>
                        <span className = 'cart-item_subtotal'>sous-total : 22 € TTC</span>
                    </div>
                    <div className='cart-item_quantity'>
                        <input className='cart-item_quantity-input' type="number" min='1' name='quantity' value={2} onchange={'#'} />
                        <a href='-'><i class="trash red icon"></i></a>
                    </div>
                </div>


        </Fragment>
    )
}

export default React.memo(CartItem);


// * LES PROPTYPES * //

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    alcohol: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    winemaker: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    culture: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
