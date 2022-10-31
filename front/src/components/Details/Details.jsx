// import react
import React, {useState} from 'react';
// import data
import data from '../../data/data';
// import Scss
import './details.scss';


function Details() {

    //aficher le bon vin en fonction de l'id dans l'url
    const [state] = useState(data);
    const url = window.location.href;
    //recupérer l'id dans l'url
    const id = url.split('/')[4];
    console.log(id);

    
    return (
        // mapper sur les données
        <div className="details">
            

            <div className="details-container-visual">
                <div className="details-img">

                    <div className=''>
                        <p className="details-price"> 19.00 €</p>
                        <p className="tablet-color-rouge">•</p>
                    </div>
                    <img className="wine-img" src="" alt="red-wine" />

                    <ul className="details-tag">
                        <li className="details-Vegan"><span className="point">•</span> Vegan</li>
                        <li className="details-Raisonnée"><span className="point">•</span> Raisonnée</li>
                        <li className="details-Sans sulfites"><span className="point">•</span> Sans sulfites</li>
                    </ul>
                </div>
                <div className="details-cart">
                    <div className="details-content">
                    
                        <h2 className="details-winemaker">{state.winemaker}</h2>
                        <p className="details-wine-name">" {state.name} "</p>
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