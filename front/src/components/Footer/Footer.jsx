// import React
import React, { Fragment } from 'react';
// import mini-logo
import logo from './logo.png';
// import logo facebook
import facebook from './logo-facebook.png';
// import logo instagram
import instagram from './logo-instagram.png';
//import scss
import './footer.scss';

// Component Header
function Footer() {
    return (
        //création d'une navbar
        <footer>
            <div div className="footer">
                <Fragment>
                    <div className="footer-logo">
                        <a href="/"><img src={logo} alt="logo nom d'un vin" className="logo" href="/" /></a>
                    </div>
                </Fragment>
                <div className="menu">
                    <div className="footer-menu">
                        <h2 className="menu-title">Nous contacter :</h2>
                        <a href="/" className="link">Contactez-nous</a>
                        <a href="/" className="link">FAQ / Aide</a>

                    </div>
                    <div className="footer-menu">
                        <h2 className="menu-title">Comment ça marche ? </h2>
                        <a href="/" className="link">A propos</a>
                        <a href="/" className="link">La Livraison</a>
                        <a href="/" className="link">FAQ / Aide</a>
                    </div>
                    <div className="footer-menu">
                        <h2 className="menu-title">Suivez-nous !</h2>
                        <div className="social">
                            <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="logo nom d'un vin" className="logo-social" /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="logo nom d'un vin" className="logo-social" /></a>
                        </div>
                        <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer" className="community">
                            <p className="community-title">Rejoignez la <br />communauté</p>
                            <img src={logo} alt="logo nom d'un vin" className="community-logo" href="/" />
                        </a>
                        
                    </div>
                </div>

                <hr></hr>

                <div className="footer-mentions">
                    <a href="/" className="mentions">Mentions légales & CGV</a>
                    <a href="/" className="mentions">Vie privée</a>
                    <a href="/" className="mentions">Préférences de cookies</a>
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);