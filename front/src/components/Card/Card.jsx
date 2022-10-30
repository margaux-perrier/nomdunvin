// import react
import React, { Fragment } from 'react';




// import Scss
import './card.scss';
// Component Filter
function Card({size, color, alcohol, price, name, winemaker, culture, region, img}) {
    return (
        <Fragment>
            <div className="card">
                <div className='visual'>
                    <div className="format">
                        <p>{size}</p>
                        <p className='degrees'>{`${alcohol}`}%.vol</p>
                    </div>
                    <div className="card-img">
                        <img className="wine-logo" src={img} alt="red-wine" />
                    </div>
                    <ul className="card-tag">
                        {culture.map((item) => (
                        <li className={`tag-${item}`}><span className="point">•</span> {item}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-content">
                    <h2 className="winemaker">{winemaker}</h2>
                    <p className="wine-name">" {name} "</p>
                    <p className="wine-region">{region}</p>
                    <p className={`tablet-color-${color}`}>•</p>

                </div>

                <div className="card-price">
                    <button className='price-btn'>Ajouter au panier</button>
                    <p className='price'>{price} €</p>
                </div>
            </div>
        </Fragment>

    );
}

export default React.memo(Card);