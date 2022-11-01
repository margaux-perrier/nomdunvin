// import react
import React, { Fragment } from 'react';
// import de Link 
import { Link } from 'react-router-dom';
// import logo cart
import cart from './cart.png';
// import Scss
import './card.scss';
// Component Filter
function Card({
    id,
    size,
    color,
    alcohol,
    price,
    name,
    winemaker,
    culture,
    region,
    img,
    handleClick
}) {
    return (
        <Fragment>
            <div className="card">
                <div className='visual'>
                    <div className="left-card">
                        <p>{size}</p>
                        <p className='degrees'>{`${alcohol}`}%.vol</p>
                    </div>
                    <div className="card-img">
                        <img className="wine-logo" src={img} alt="red-wine" />
                    </div>
                    <div className="right-card">
                        <ul className="card-tag">
                            {culture.map((item, index) => (
                                <li key={index} className={`tag-${item}`}>{item}</li>
                            ))}
                        </ul>
                        <div>
                            <Link to="/"> <img className="logo-cart" src={cart} alt="cart" /> </Link>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="winemaker">{winemaker}</h2>
                    <p className="wine-name">" {name} "</p>
                    <p className="wine-region">{region}</p>
                    <p className={`tablet-color-${color}`}>•</p>
                </div>

                <div className="card-price">
                    <button className="price-btn" id={id} onClick={handleClick}>Voir le produit</button>
                    <p className='price'>{price} €</p>
                </div>
            </div>
        </Fragment>

    );
}

export default React.memo(Card);