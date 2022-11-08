/* eslint-disable react/no-unescaped-entities */
// import React
import React, { Fragment, useState} from 'react';
import { Link, NavLink } from 'react-router-dom'

//import reducer
import { loginRequest } from '../../services/userRequests'
import UseFormReducer, {getActionSetValue} from "../../reducers/UseFormReducer";
import useUserReducer, { getActionUserLogged } from "../../reducers/useUserReducer";


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
    const { userDispatch } = useUserReducer();
    const { formState, formDispatch } = UseFormReducer();



    //* FUNCTIONS *//

    // Change the value to "true" or "false" when clicking on the "Se connecter" button
    const handleIsOpen = (event) => {event.preventDefault(); setIsOpen(!isOpen);}

    // Change the value of the "onChange" state when the user enters an email/password
    const handleTextFieldChange = (e) => {
        formDispatch(getActionSetValue(e.target.name, e.target.value));
      }

   const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const user = await loginRequest (formState.connectionEmail, formState.connexionPassword)
    userDispatch(getActionUserLogged(user));
    setIsOpen(false);
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
                        <NavLink end to="/" style={({isActive}) =>{return { color : isActive ? 'white' : 'white'}}} className="tab-link">La Cave</NavLink>
                    </div>
                    {/* {userState.loggedUser.user} ? <p>welcome back {userState.loggedUser.user.firstname}</p>  */}
                    {/* {console.log(userState.loggedUser.user.firstname)} */}
                </div>
                <div>
                    <div className="menu-login">
                        

                        
                        {isOpen ? // if the "isOpen" is true we display the login form below
                            <div className="login-form">
                                <form action="" className="form-login">
                                    <button className="close" onClick={handleIsOpen}>X</button>
                                    <div className="form-group">
                                        <input type="email" 
                                        name='connectionEmail'
                                        value={formState.connectionEmail} onChange={handleTextFieldChange} className="form-input" placeholder='Email' />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" 
                                        name='connexionPassword'
                                        value={formState.connexionPassword}
                                        onChange={handleTextFieldChange} className="form-input" placeholder='Password' />
                                    </div>
                                    <button onClick={handleLoginSubmit} className="form-btn">Connexion</button>
                                </form>
                            </div>
                            : // Else we display the buttons "Se connecter" and "S'inscrire"
                            <Fragment>
                                <Link to="/" onClick={handleIsOpen} className="tab-connexion">Se connecter</Link>
                                <Link to="/signup" className="tab-connexion">S'inscrire</Link>

                            </Fragment>
                        }
                    </div>
                    <div className="menu-user">
                        <Link to="/signup" className="tab-user">
                            <img src={user} alt="logo utilisateur" className="logo-user" />
                        </Link>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default React.memo(Header);

