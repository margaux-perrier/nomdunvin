import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'; 
import PropTypes from 'prop-types';
import { loginRequest } from "../../services/userRequests";
import {setToken, removeToken} from '../../services/instance'
import { loginContext } from '../../Context/loginContext'; 

function LoginForm (){
  const {  isLogged, setIsLogged } = useContext(loginContext); 
  const [email, setEmail] = useState('admin@admin.com');
  const[password, setPassword] = useState('');
  const {pseudo, setPseudo} = useContext(loginContext);  
  const [error, setError] = useState('')
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
   
  return (
            <div className="login-form">
              {error && (
                  <div className="ui negative message">
                    {error}
                  </div>
              )}
              
              {isLogged && ( 
                <div className="login-form-logged">
                  <p className="login-form-message">
                    Bonjour {pseudo} !
                  </p>
                  <button
                    type="button"
                    className="login-form-button"
                    onClick={handleLogout}
                  >
                    Déconnexion
                  </button>
                </div>
              )}

              {!isLogged && (
        
                <form autoComplete="off" className="login-form-element" onSubmit = {handleSubmitLoginForm}>
                  <input
                    name="email"
                    placeholder="Adresse Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  
                  <button
                    type="submit"
                    className="login-form-button"
                  >
                    se connecter
                  </button>

                  <Link to="/signup" className="tab-connexion">S'inscrire</Link>
                </form>
              )}
            </div>
          );
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
  }
export default React.memo(LoginForm);