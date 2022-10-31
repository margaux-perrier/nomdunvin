// import react
import React, { useState } from 'react';
// import data
import data from '../../data/data';
// import Scss
import './details.scss';


function Details() {

    const [state] = useState(data);

    const url = window.location.href;
    const id = Number(url.split('/')[4]);
    const wine = state.wines.find(wine => wine.id === id);


    return (


        <div className="details">
            <div className="details-container-visual">
                <div className="details-img">
                    <div className=''>
                        <p className={`tablet-color-${wine.color}`}>•</p>
                    </div>
                    <img className="wine-img" src={wine.img} alt="red-wine" />
                    <ul className="details-tag">

                        {wine.culture.map((tags, index) => (
                            <li className={`details-${tags}`}>{tags}</li>
                        ))}
                    </ul>
                </div>
                <div className="details-cart">
                  
                        <div className="details-content">

                            <h2 className="details-winemaker">{wine.winemaker}</h2>
                            <p className="details-wine-name">" {wine.name} "</p>
                            <p className="details-wine-region">{wine.region}</p>
                            <p className="details-price"> {wine.price} €</p>
                        </div>

                        <form className="details-form">
                            <input className="details-input" type="number" name="quantity" placeholder="0" min="1" max="50" />
                            <button className="details-btn">Ajouter</button>
                        </form>
                   
                </div>
            </div>

            <div className="details-container-information">
                <div className="details-reviews">
                    <p>AVIS</p>
                </div>
                <div className="details-features">
                    <p>CARACTERISTIQUES </p>
                </div>

            </div>

        </div>


    )
}

export default React.memo(Details);