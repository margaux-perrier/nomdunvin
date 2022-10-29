// import react
import React, { Fragment } from 'react';
// import red-wine logo
import rouge from './wineLogo/rouge.png';
// import white-wine logo
import blanc from './wineLogo/blanc.png';
// import pink-wine logo
import rosé from './wineLogo/rose.png';
// import Scss
import './card.scss';
// Component Filter
function Card() {



    return (
        <Fragment>
        {/* DEBUT DE LA PREMIERE CARTE */ }
            <div className="card">
                <div className='visual'>
                    <div className="format">
                        <p>75 cl</p>
                        <p className='degrees'>13%.vol</p>
                    </div>
                    <div className="card-img">
                        <img className="wine-logo" src={rouge} alt="red-wine" />
                    </div>
                    <ul className="card-tag">
                        <li className="tag-Vegan"><span className="point">•</span> Vegan</li>
                        <li className="tag-Raisonnée"><span className="point">•</span> Raisonnée</li>
                        <li className="tag-Sans sulfites"><span className="point">•</span> Sans sulfites</li>
                    </ul>
                </div>
                <div className="card-content">
                    <h2 className="winemaker">Domaine de Johnny Joe</h2>
                    <p className="wine-name">" Le bon petit vin "</p>
                    <p className="wine-region">Bourgogne</p>
                    <p className="tablet-color-rouge">•</p>
                </div>

                <div className="card-price">
                    <button className='price-btn'>Ajouter au panier</button>
                    <p className='price'>19.00 €</p>
                </div>
            </div>
           {/*FIN DE LA PREMIERE CARTE*/}

           {/*DEBUT DE LA DEUXIEME CARTE*/}
          
            <div className="card">
                <div className='visual'>
                    <div className="format">
                        <p>75 cl</p>
                        <p className='degrees'>15%.vol</p>
                    </div>
                    <div className="card-img">
                        <img className="wine-logo" src={rosé} alt="red-wine" />
                    </div>
                    <ul className="card-tag">
                        <li className="tag-Biodynamie"><span className="point">•</span> Biodynamie</li>
                        <li className="tag-Nature"><span className="point">•</span> Nature</li>
                       
                    </ul>
                </div>
                <div className="card-content">
                    <h2 className="winemaker">Domaine de je sais pas quoi</h2>
                    <p className="wine-name">" Le manque d'inspiration "</p>
                    <p className="wine-region">Languedoc-Roussilon</p>
                    <p className="tablet-color-rosé">•</p>
                </div>

                <div className="card-price">
                    <button className='price-btn'>Ajouter au panier</button>
                    <p className='price'>14.00 €</p>
                </div>
            </div>
            {/*FIN DE LA DEUXIEME CARTE*/}

            {/* DEBUT DE LA TROISIEME CARTE */}

            <div className="card">
            <div className='visual'>
                <div className="format">
                    <p>75 cl</p>
                    <p className='degrees'>32%.vol</p>
                </div>
                <div className="card-img">
                    <img className="wine-logo" src={blanc} alt="red-wine" />
                </div>
                <ul className="card-tag">
                    <li className="tag-Bio"><span className="point">•</span> Bio</li>
                    <li className="tag-Sans sulfites"><span className="point">•</span> Sans Sulfites</li>
                   
                </ul>
            </div>
            <div className="card-content">
                <h2 className="winemaker">Domaine de l'ivrogne</h2>
                <p className="wine-name">" Tais-toi et bois "</p>
                <p className="wine-region">Alsace</p>
                <p className="tablet-color-blanc">•</p>
            </div>

            <div className="card-price">
                <button className='price-btn'>Ajouter au panier</button>
                <p className='price'>58.00 €</p>
            </div>
        </div>
        {/* FIN DE LA TROISIEME CARTE */}



        </Fragment>




    );
}

export default React.memo(Card);