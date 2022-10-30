/* eslint-disable react/no-unescaped-entities */
// import React
import React from 'react';
// import logo-mini
import logo from './logo.png';
// import logo utilisateur
import user from './user.png';
//import scss
import './header.scss';

// Component Header
function Header() {
    return (
        //création d'une navbar
        <header className="header">
            <nav className="navbar">
                <div className="menu">
                    <div>
                        <a href="/" className="menu-link">
                            <img src={logo} alt="logo nom d'un vin" className="logo" />
                        </a>
                    </div>
                    <div className="link">
                        <a href="/" className="tab-link">LA CAVE</a>
                    </div>
                </div>
                <div>
                    <div className="menu-login">
                        <a href="/" className="tab-connexion">Se connecter</a>
                        <a href="/" className="tab-connexion">S'inscrire</a>
                    </div>
                    <div className="menu-user">
                        <a href="/" className="tab-user">
                            <img src={user} alt="logo utilisateur" className="logo-user" />
                        </a>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default React.memo(Header);