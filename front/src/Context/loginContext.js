import { createContext, useState} from 'react'; 
import { tokenVerifyToStayConnected } from '../services/userRequests';
import { setToken } from '../services/instance';

export const loginContext = createContext(); 

export const LoginContextProvider = ({ children }) => {
    //si le token n'existe pas dans localstorage=> islogged = false
    //si il existe dans localstorage, requête au serv, check (coté serv) si le token est valable
    //s'il est pas valable => islogged = false(serv)
    //si il est valable => isloged = true et la requête renvoie les infos pseudo etc(serv)
    const token = localStorage.getItem('token');
    const [ isLogged, setIsLogged] = useState(false); 
    const [pseudo, setPseudo] = useState('');
    const [ isRoleAdmin, setIsRoleAdmin] = useState(false); 
    
    const TokenVerify = async () => {
        if (!token) {
            setIsLogged(false);
            console.log('echec local storage token')
        }
        
        if (token) {
            setToken(token);
            const response = await tokenVerifyToStayConnected();
            console.log(response)
            if(response.pseudo) {
                setIsLogged(true);
                setPseudo(response.pseudo);
            } else {
                setIsLogged(false);
                console.log(response.message)
            }
        }    
        return;    
    }

    
    
    return (
        <loginContext.Provider value={{ TokenVerify, isLogged, setIsLogged, pseudo, setPseudo, isRoleAdmin, setIsRoleAdmin}} >
            {children}
        </loginContext.Provider>
    ); 

};