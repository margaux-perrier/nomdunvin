import { createContext, useState} from 'react'; 

export const loginContext = createContext(); 

export const LoginContextProvider = ({ children }) => {
    const [ isLogged, setIsLogged] = useState(false); 
    const [pseudo, setPseudo] = useState('');
    const [ isRoleAdmin, setIsRoleAdmin] = useState(false); 
    
    return (
        <loginContext.Provider value={{isLogged, setIsLogged, pseudo, setPseudo, isRoleAdmin, setIsRoleAdmin}} >
            {children}
        </loginContext.Provider>
    ); 

};