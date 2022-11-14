// import PropTypes
import PropTypes from 'prop-types';
// import react
import React, { Fragment, useState, useContext} from 'react';
//import react-router-dom
import {Link} from 'react-router-dom'; 
//import loginContext 
import { loginContext } from '../../Context/loginContext';
// import Modal
import Modal from '../Modal/Modal';
// import logo cart
import cart from './cart.png';
// import Scss
import './card.scss';



// Component Card

function Card({
    id,
    size,
    color,
    alcohol,
    price,
    name,
    winemaker,
    culture,
    appellation,
    img,
    handleClick,
}) {

    const [ isAddWineToCartModalOpen, setIsAddWineToCartModalOpen ] = useState(false);
    const [ isConnexionMessageOpen, setIsConnexionMessageOpen ] = useState(false); 
    const { isLogged } = useContext(loginContext); 
    
    const handleCartIconClick = () => {
        if(isLogged){
            setIsAddWineToCartModalOpen(true)
        }else(
            setIsConnexionMessageOpen(true)
        );
    }

    return (
        <Fragment>

            <Modal
                key={id}
                size={size}
                color={color}
                alcohol={alcohol}
                price={price}
                name={name}
                winemaker={winemaker}
                appellation={appellation}
                avatar={img}
                id={id}
                isOpen={ isAddWineToCartModalOpen }
                setIsOpen={ setIsAddWineToCartModalOpen }
            />



            <div className="card">
                <div className='visual'>
                    <div className="left-card">
                        <p>{size}</p>
                        <p className='degrees'>{`${alcohol}`}%.vol</p>
                    </div>
                    <div className="card-img">
                        <Link to={`/wine/${id}`}><img className="wine-logo" src={img} alt={`${winemaker.name} ${name}`} /></Link>
                    </div>
                    <div className="right-card">
                        <ul className="card-tag">
                            {culture.map(({name, id}) => (
                                <li key={id} className={`tag-${name}`}>{name}</li>
                            ))}
                        </ul>
                        <div>
                            <img className="logo-cart" src={cart} alt="cart" onClick={() => handleCartIconClick(true)}/>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="winemaker">{winemaker.name}</h2>
                    <p className="wine-name">" {name} "</p>
                    <p className="wine-region">{appellation}</p>
                    <p className={`tablet-color-${color}`}></p>
                </div>
                { isConnexionMessageOpen &&
                    <div class="ui negative message">
                         <i class="close icon" onClick={() =>  setIsConnexionMessageOpen(false) }></i>
                        <div class="header">
                        Connectez-vous pour ajouter un vin au panier
                        </div>
                    </div>
                }
                <div className="card-price">
                    <button className="price-btn" id={id} onClick={handleClick}>Voir le produit</button>
                    <p className='price'>{price} €</p>
                </div>
            </div>
        </Fragment>

    );
}

export default React.memo(Card);


// * PROP-TYPES *//

Card.propTypes = {
    id: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    alcohol: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    winemaker: PropTypes.shape({
        name : PropTypes.string
    }).isRequired,
    appellation: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    culture: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
