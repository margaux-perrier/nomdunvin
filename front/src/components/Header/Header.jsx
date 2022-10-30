// import React
import React, { Fragment, useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
// import logo
import logo from './logo.png';
// import logo utilisateur
import user from './user.png';
//import scss
import './header.scss';

// Component Header
function Header() {

    //* STATES *//
    // This State concerns the opening of the login form when you click on the "Se connecter" button
    const [isOpen, setIsOpen] = useState(false);
    //This state saves the input of the users of the email form
    const [onChangeEmail, setOnChangeEmail] = useState("");
    //This state saves the input of the users of the password form
    const [onChangePassword, setOnChangePassword] = useState("");


    //* FUNCTIONS *//

    // Change the value to "true" or "false" when clicking on the "Se connecter" button
    const handleIsOpen = (event) => {event.preventDefault(); setIsOpen(!isOpen);}

    // Change the value of the "onChange" state when the user enters an email
    const handleChangeEmail = (event) => {setOnChangeEmail(event.target.value);}

    // Change the value of the "onChange" state when the user enters a password
    const handleChangePassword = (event) => {setOnChangePassword(event.target.value);}

   // We are waiting for the database before continuing to code this part
    const handleSubmit = (event) => {event.preventDefault();
        console.log(onChangeEmail);
        console.log(onChangePassword);
    }


    return (
        //création d'une navbar
        <header className="header">
            <nav className="navbar">
                <div className="menu">
                    <div>
                        <Link to="/" className="menu-link">
                            <img src={logo} alt="logo nom d'un vin" className="logo" />
                        </Link>
                    </div>
                    <div className="link">
                        {/* NavLink ready to be configured if we install other links. it is used to mark the menu on which we are, using its "isActive" property*/ }
                        <NavLink end to="/" style={({isActive}) =>{return { color : isActive ? 'white' : 'white'}}} className="tab-link">LA CAVE</NavLink>

            
                    </div>
                </div>
                <div>
                    <div className="menu-login">
                        {isOpen ? // if the "isOpen" is true we display the login form below
                            <div className="login-form">
                                <form action="" className="form-login">
                                    <button className="close" onClick={handleIsOpen}>X</button>
                                    <div className="form-group">
                                        <input type="email" onChange={handleChangeEmail} className="form-input" placeholder='Adresse Email' />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" onChange={handleChangePassword} className="form-input" placeholder='Mot de passe' />
                                    </div>
                                    <button onClick={handleSubmit} className="form-btn">Connexion</button>
                                </form>
                            </div>
                            : // Else we display the buttons "Se connecter" and "S'inscrire"
                            <Fragment>
                                <Link to="/" onClick={handleIsOpen} className="tab-connexion">Se connecter</Link>
                                <Link to="/" className="tab-connexion">S'inscrire</Link>
                            </Fragment>
                        }
                    </div>
                    <div className="menu-user">
                        <Link to="/" className="tab-user">
                            <img src={user} alt="logo utilisateur" className="logo-user" />
                        </Link>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default React.memo(Header);

