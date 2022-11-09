import React, { useContext, useState, Fragment } from "react";
import {Link, useNavigate} from 'react-router-dom'; 
import PropTypes from 'prop-types';
import { loginRequest } from "../../services/userRequests";
import {setToken, removeToken} from '../../services/instance'
import { loginContext } from '../../Context/loginContext'; 
import './LoginForm.scss'; 

function LoginForm (){
  const {  isLogged, setIsLogged } = useContext(loginContext); 
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const {pseudo, setPseudo} = useContext(loginContext);  
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false); 
  const {isRoleAdmin, setIsRoleAdmin} = useContext(loginContext);
  const navigate=useNavigate();

  const handleSubmitLoginForm = async (e) => {
    e.preventDefault(); 
    try {
      const response = await loginRequest(email, password); 
      setToken(response.token);
      if (response.logged){
        setIsLogged(true);
        setPseudo(response.pseudo); 
        if(response.role === 'admin'){
          setIsRoleAdmin(true);
          navigate('/cart'); //Todo : Changer la route vers la page admin ! 
        }
      }

    } catch (error) {
      console.log(error.message)
     setError('mauvais password ou email');
    }
    
}

  const handleLogout = () => {
    setIsLogged(false);
    removeToken();
  }

   // Change the value to "true" or "false" when clicking on the "Se connecter" button
   const handleIsOpen = (event) => {event.preventDefault(); setIsOpen(!isOpen);}
   
  return (
            <div className="menu-login">

              {error && (
                  <div className="ui negative message">
                    {error}
                  </div>
              )}
              
              {isLogged && ( 
                <div className="login-form_logged">
                  <p className="login-form_message">
                    Bonjour {pseudo} !
                  </p>
                  <button
                    type="button"
                    className="login-form_button"
                    onClick={handleLogout}
                  >
                    Déconnexion
                  </button>
                </div>
              )}

              {(!isLogged && isOpen && (
        
                <form autoComplete="off" className="form-login" onSubmit = {handleSubmitLoginForm}>
                  <button className="close" onClick={handleIsOpen}>X</button>
                  <div className="form-group">
                    <input
                      name="email"
                      placeholder="Adresse Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      placeholder="Mot de passe"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <button
                    type="submit"
                    className="form-btn"
                  >
                    Connexion
                  </button>
                
                </form>
              )) || (
                <Fragment>
                  <Link to="/" onClick={handleIsOpen} className="tab-connexion">Se connecter</Link>
                  <Link to="/signup" className="tab-connexion">S'inscrire</Link>
                </Fragment>
              )}

            </div>
          );
};

export default React.memo(LoginForm);