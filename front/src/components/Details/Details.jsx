// import react
import React, { useState, useEffect, useCallback } from 'react';
// import useParams
import { useParams } from 'react-router-dom';
//import de fecthWinesAPI
import { fetchOneWine } from '../../services/fecthWinesAPI.js'
// import Scss
import './details.scss';


function Details() {

    // Stock Data in State
    const [wine, setWine] = useState([]);

   
    // Get id from url with useParams
    const { id } = useParams();

    // Update State with Data API
    const fetchWine = async () => {
        const response = await fetchOneWine(id);
        setWine(response);
        console.log(response);
    };
 
    // Use Effect
    useEffect(() => {
        fetchWine();
    }, []);

  


    return (

        <div className="details">
            <div className="details-container-visual">
                <div className="details-img">
                    <div className=''>
                        <p className={`tablet-color-${wine.color}`}>•</p>
                    </div>
                    <img className="wine-img" src={wine.avatar} alt="Logo wine" />
                    <ul className="details-tag">
                        {/*wine.culture.map((tags, index) => (
                            <li className={`details-${tags}`}>{tags}</li>
                        ))*/}
                    </ul>
                </div>
                <div className="details-cart">

                    <div className="details-content">

                        <h2 className="details-winemaker">
                            {name}
                        </h2>
                        <p className="details-wine-name">" {wine.name} "</p>
                        <p className="details-wine-region">dhdgh</p>
                        <p className="details-price"> {wine.price} €</p>
                    </div>

                    <form className="details-form">
                        <input className="details-input" type="number" name="quantity" placeholder="0" min="1" max="50" />
                        <button className="details-btn">Ajouter au panier</button>
                    </form>

                </div>
            </div>

            <div className="details-container-information">
                <div className="details-reviews">
                    <h2 className="details-reviews-title">Notre avis sur ce vin...</h2>
                    <p className="details-reviews-content">{wine.description}</p>
                    <h2 className="details-dish-title">Quel menu accompagne t'il ?</h2>
                    <p className="details-dish-content">fjjfj</p>
                </div>

                <div className="details-features">


                    <table>
                        <thead>
                            <tr>
                                <th className="feature">Type de vin</th>
                                <td>Blanc</td>
                            </tr>
                            <tr>
                                <th className="feature">Appellation</th>
                                <td>Bordeaux</td>
                            </tr>
                            <tr>
                                <th className="feature">Cépages</th>
                                <td>Rasin blanc de qefqefef</td>
                            </tr>
                            <tr>
                                <th className="feature">Domaine</th>
                                <td>Domaine de Johnny Joe</td>
                            </tr>
                            <tr>
                                <th className="feature">Région</th>
                                <td>Région de talala</td>
                            </tr>
                            <tr>
                                <th className="feature">Millésime</th>
                                <td>2018</td>
                            </tr>
                            <tr>
                                <th className="feature">Agriculture</th>
                                <td>Biologique</td>
                            </tr>
                            <tr>
                                <th className="feature">Contenance</th>
                                <td>75cl</td>
                            </tr>
                            <tr>
                                <th className="feature">Alcool</th>
                                <td>13,5</td>
                            </tr>
                        </thead>
                    </table>

                    <p>CARACTERISTIQUES </p>

                </div>

            </div>

        </div>
    )
}

export default React.memo(Details);