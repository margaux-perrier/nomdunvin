
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import jumelle from './jumelle.jpg';
import oh from './oh.jpg';
import vigneron from './vigneron.jpg';
import { Carousel } from 'react-responsive-carousel';
import './slider.scss';

function Slider() {
    return (
        <Carousel
            className="slider"
            autoPlay={true}
            interval={8000}
            infiniteLoop={true}
            transitionTime={3000}
        >
            <div>
                <img src={jumelle} alt="Homme avec des jumelles" />
                <div className="overlay">
                    <h2 className="overlay_title">Vos bouteilles livrées <br></br>partout en <span>France</span> ! </h2>
                    <p className="overlay_text"> On sait ! Nous non plus on ne l'aurait pas cru ! </p>
                </div>

            </div>
            <div>
                <img src={oh} alt="Homme surpris" />
                <div className="overlay">
                    <h2 className="overlay_title">Votre sommelier en ligne <span>24H/24</span> </h2>
                    <p className="overlay_text"> Oui, Oui ! C'est le petit rond rouge en bas à droite... </p>
                </div>

            </div>
            <div>
            <img src={vigneron} alt="vigneron qui lève un verre" />
            <div className="overlay">
                <h2 className="overlay_title">Notre vigneron de la <span>semaine</span> !</h2>
                <p className="overlay_text"> Lui ! C'est le meilleur... </p>
            </div>

        </div>

       


        </Carousel>
    )

}

export default Slider;