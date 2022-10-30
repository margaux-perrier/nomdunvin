// import react
import React from 'react';
// import red-wine logo
import rouge from './wineLogo/rouge.png';
// import white-wine logo
import blanc from './wineLogo/blanc.png';
// import pink-wine logo
import rosé from './wineLogo/rose.png';
// import Scss
import './details.scss';



// Component Filter
function Details() {



    return (
        <div className="details">
            <div className="details-container-visual">
                <div className="details-img">

                    <div className=''>
                        <p className="details-price"> 19.00 €</p>
                        <p className="tablet-color-rouge">•</p>
                    </div>
                    <img className="wine-img" src={rouge} alt="red-wine" />

                    <ul className="details-tag">
                        <li className="details-Vegan"><span className="point">•</span> Vegan</li>
                        <li className="details-Raisonnée"><span className="point">•</span> Raisonnée</li>
                        <li className="details-Sans sulfites"><span className="point">•</span> Sans sulfites</li>
                    </ul>
                </div>
                <div className="details-cart">
                    <div className="details-content">
                        <h2 className="details-winemaker">Domaine de Johnny Joe</h2>
                        <p className="details-wine-name">" Le bon petit vin "</p>
                        <p className="details-wine-region">Bourgogne</p>
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
                    <p>CARACTERISTIQUES</p>
                </div>

            </div>

        </div>
    )
}

export default React.memo(Details);