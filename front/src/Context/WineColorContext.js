// import React with useState and createContext
import { createContext, useState } from 'react';

// Create WineColorContext
export const WineColorContext = createContext();

// Create Provider for Share informations between components
export const WineColorProvider = ({ children }) => {

// Create State for stock color
    const [checkbox, setCheckbox] = useState( 
        {
            rouge: false,
            blanc: false,
            rose: false
        }  
    );

 // Create function for change state of checkbox
    const handleChange = (e) => {
        setCheckbox({ ...checkbox, [e.target.name]: e.target.checked }); 
    }


// Create function for choose and share informations between components
        return (
            <WineColorContext.Provider value={{ checkbox, handleChange }}>
                {children}
            </WineColorContext.Provider>
        );
    }

