//import from React
import {  createContext, useState } from 'react';
//import request
import {  tokenVerifyToStayConnected } from '../services/userRequests';
//import token
import {  setToken } from '../services/instance';

export const loginContext = createContext();

export const LoginContextProvider = ({ children}) => {
   
    const token = localStorage.getItem('token');
    const [isLogged, setIsLogged] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [isRoleAdmin, setIsRoleAdmin] = useState(false);

    const TokenVerify = async () => {
        if (!token) {
            setIsLogged(false);
        }

        if (token) {
            setToken(token);
            const response = await tokenVerifyToStayConnected();
            if (response.pseudo) {
                setIsLogged(true);
                setPseudo(response.pseudo);
                if (response.role === 'admin') {
                    setIsRoleAdmin(true);
                }
            } else {
                setIsLogged(false);
            }
        }
        return;
    }
    return ( 
        <loginContext.Provider value = {
            {
                TokenVerify,
                isLogged,
                setIsLogged,
                pseudo,
                setPseudo,
                isRoleAdmin,
                setIsRoleAdmin
            }
        } > {
            children
        } 
        </loginContext.Provider>
    );

};