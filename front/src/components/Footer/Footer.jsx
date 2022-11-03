// import React
import React from 'react';
// import Link from react-router-dom
import { Link } from 'react-router-dom';
// import mini-logo
import logo from './logo.png';
// import logo facebook
import facebook from './logo-facebook.png';
// import logo instagram
import instagram from './logo-instagram.png';
//import scss
import './footer.scss';

// Component Footer
function Footer() {
    return (
        <footer>
            <div className="footer">
            
                    <div className="footer-logo">
                        <img src={logo} alt="logo nom d'un vin" className="logo" />
                    </div>

                <div className="menu">
                    <div className="footer-menu">
                        <h2 className="menu-title">Nous contacter :</h2>
                        <Link to="/" className="link">Contactez-nous</Link>
                        <Link to="/" className="link">FAQ / Aide</Link>

                    </div>
                    <div className="footer-menu">
                        <h2 className="menu-title">Comment ça marche ? </h2>
                        <Link to="/" className="link">A propos</Link>
                        <Link to="/" className="link">La Livraison</Link>
                        <Link to="/" className="link">FAQ / Aide</Link>
                    </div>
                    <div className="footer-menu">
                        <h2 className="menu-title">Suivez-nous !</h2>
                        <div className="social">
                            <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="logo nom d'un vin" className="logo-social" /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="logo nom d'un vin" className="logo-social" /></a>
                        </div>
                       
                        
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