// import react
import React, { useEffect, useState, useCallback } from 'react';
// import useParams
import { useParams } from 'react-router-dom';
//import de fecthWinesAPI
import { fetchOneWine } from '../../services/fecthWinesAPI.js'
// import Scss
import './details.scss';



function Details() {

    // Stock Data in State
    const [wine, setWine] = useState({});


    // Get id from url with useParams
    const { id } = useParams();

    const fetchWine = useCallback(async () => {
        const response = await fetchOneWine(id);
        console.log('RESPONSE', response.winemaker.name); 
        setWine(response);

    }, [id]);

   console.log("ICI WINEMKAER ===", wine.winemaker) 

    // Use Effect
    useEffect(() => {

        fetchWine();

    }, [fetchWine]);


    console.log('>>>ICI 2', wine); 

    return (

        <div className="details">
            <div className="details-container-visual">
                <div className="details-img">
                    <div className=''>
                        <p className={`tablet-color-${wine.color}`}>•</p>
                    </div>
                    <img className="wine-img" src={wine.avatar} alt="Logo wine" />
                    <ul className="details-tag">
                    <li className="details-Biodynamie">biodynamie</li>
                    <li className="details-Raisonnée">Raisonnée</li>
                    <li className="details-Sans sulfites">Sans Sulfites</li>
                        {/*wine.culture.map((tags, index) => (
                            <li className={`details-${tags}`}>{tags}</li>
                        ))*/}
                    </ul>
                </div>
                <div className="details-cart">

                    <div className="details-content">
                        <div>
                            <h2 className="details-winemaker">DOMAINE TEST</h2>
                        </div>
                        <p className="details-wine-name">" {wine.name} "</p>
                        <p className="details-wine-region"></p>
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


                    <table className= "table">
                        <thead>
                            <tr className="pair">
                                <th className="type case">Type de vin</th>
                                <td className="case">Blanc</td>
                            </tr>
                            <tr className="">
                                <th className="type case">Appellation</th>
                                <td className="case"> Bordeaux</td>
                            </tr>
                            <tr className="pair">
                                <th className="type case">Cépages</th>
                                <td className="case">Rasin blanc de qefqefef</td>
                            </tr>
                            <tr className="">
                                <th className="type case">Domaine</th>
                                <td className="case">Domaine de Johnny Joe</td>
                            </tr>
                            <tr className="pair">
                                <th className="type case">Région</th>
                                <td className="case">Région de talala</td>
                            </tr>
                            <tr className="">
                                <th className="type case">Millésime</th>
                                <td className="case">2018</td>
                            </tr>
                            <tr className="pair">
                                <th className="type case">Agriculture</th>
                                <td className="case">Biologique</td>
                            </tr>
                            <tr className="">
                                <th className="type case">Contenance</th>
                                <td className="case">75cl</td>
                            </tr>
                            <tr className="pair">
                                <th className="type case">Alcool</th>
                                <td className="case">13,5</td>
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default React.memo(Details);