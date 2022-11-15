/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import React
import React, { useState,useContext, useEffect} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm';
//import reducer
import { loginRequest } from '../../services/userRequests'
import UseFormReducer, {getActionSetValue} from "../../reducers/UseFormReducer";
import useUserReducer, { getActionUserLogged } from "../../reducers/useUserReducer";
import { loginContext } from '../../Context/loginContext';
import {setToken, removeToken} from '../../services/instance'

// import logo cart
import cart from './cart.png';


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
    const {  isLogged, setIsLogged } = useContext(loginContext);
    const {isRoleAdmin, setIsRoleAdmin} = useContext(loginContext);
    const navigate=useNavigate();
 




    //* FUNCTIONS *//

    // Change the value to "true" or "false" when clicking on the "Se connecter" button
    const handleIsOpen = (event) => {event.preventDefault(); setIsOpen(!isOpen);}

    // Change the value of the "onChange" state when the user enters an email/password
    const handleTextFieldChange = (e) => {
        formDispatch(getActionSetValue(e.target.name, e.target.value));
      }

   const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const user = await loginRequest (formState.connectionEmail, formState.connexionPassword);
    setToken(user.token);
    userDispatch(getActionUserLogged(user));
    setIsOpen(false);
  }

  const handleLogout = () => {
    setIsLogged(false);
    setIsRoleAdmin(false);
    removeToken();
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    navigate('/'); 
    setIsOpen(false)
  }


  const { TokenVerify } = useContext(loginContext);
  useEffect(() => {
      TokenVerify()
  }, [TokenVerify])


    return (
        //création d'une navbar
        <header className="header">
            <nav className="navbar">
                <div className="header_menu">
                    <div>
                        <Link to="/" className="menu-link">
                            <img src={logo} alt="logo nom d'un vin" className="logo" />
                        </Link>
                    </div>
                    <div className="link">
                        {/* NavLink ready to be configured if we install other links. it is used to mark the menu on which we are, using its "isActive" property*/ }
                        <NavLink end to="/" style={({isActive}) =>{return { color : isActive ? 'white' : 'white'}}} className="tab-link">La Cave</NavLink>
                    </div>
                   
                </div>
                <div className='button-container'>
                    <div className="menu-login">
                        <LoginForm />
                    </div>
                   
                    {isLogged && (
                        <div className='menu-button'>
                            {!isRoleAdmin ? 
                                    <Link to='/cart' className="cart-icons " ><i class="shopping large bag inverted icon"></i></Link>
                            : 
                                    <Link to="/admin" className = "dashbord-link dashboard"><i class="edit large icon"></i></Link>
                            }
                       

                            <button
                                type="button"
                                className="header-button"
                                onClick={handleLogout}
                            > Déconnexion
                            </button>
                        </div>
                    )}

                    {!isLogged && (
                        <div className="menu-user">
                        <Link to="/signup" className="tab-user">
                            <img src={user} alt="logo utilisateur" className="logo-user" />
                        </Link>
                        </div>
                    )}

                    
                </div>

            </nav>
        </header>
    );
}

export default React.memo(Header);

