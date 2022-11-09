// import React with useState and createContext
import { createContext, useState, useEffect } from 'react';
// import fetchAllWines from services
import { fetchAllWines } from '../services/fecthWinesAPI.js';
// Create WineColorContext
export const AllWinesContext = createContext();
// Create Provider for Share informations between components
export const AllWinesProvider = ({ children }) => {


    // * CREATE STATE FOR ALL WINE, Catch Data FROM API * //
  
    // Create state for allWines
    const [wines, setWines] = useState([]);
    

    // Stock data from API in state (with Axios request)
 
    const fetchWines = async () => {
        const response = await fetchAllWines();
        setWines(response);
    }
    // useEffect for fetch data from API
    useEffect(() => { fetchWines() }, []);

 
    // * FILTER BY COLOR *//

    // Create state for checkboxColor - For FilterMenu component
    const [checkboxColor, setCheckboxColor] = useState([]);

    // Create function handleChange for change value of checkboxColor with index
    const handleChangeColor = (e) => {
        const index = e.target.getAttribute('index');
        const newCheckbox = [...checkboxColor];
        newCheckbox[index].value = e.target.checked;
        setCheckboxColor(newCheckbox);
    }


    // * FILTER BY WINEMAKER *//

    // Create state for checkboxWinemaker - For FilterMenu component
    const [checkboxWinemaker, setCheckboxWinemaker] = useState([]);

    // Create function handleChange for change value of checkboxWinemaker with index
    const handleChangeWinemaker = (e) => {
        const index = e.target.getAttribute('index');
        const newCheckbox = [...checkboxWinemaker];
        newCheckbox[index].value = e.target.checked;
        setCheckboxWinemaker(newCheckbox);
    }

    // * FILTER BY REGION *//
    // Create state for checkboxRegion - For FilterMenu component
    const [checkboxRegion, setCheckboxRegion] = useState([]);
   


    // Create function handleChange for change value of checkboxRegion with index
    const handleChangeRegion = (e) => {
        const index = e.target.getAttribute('index');
        const newCheckbox = [...checkboxRegion];
        newCheckbox[index].value = e.target.checked;
        setCheckboxRegion(newCheckbox);
    }

    // * RESET FILTER *//
    // Create function for reset all filter
    const resetFilter = () => {
        setCheckboxColor(checkboxColor.map((color) => ({ ...color, value: false })));
        setCheckboxWinemaker(checkboxWinemaker.map((winemaker) => ({ ...winemaker, value: false })));
        setCheckboxRegion(checkboxRegion.map((region) => ({ ...region, value: false })));
    }



    // Create function for choose and share informations between components
    return (
        <AllWinesContext.Provider value={{ wines, setWines, checkboxColor, setCheckboxColor, handleChangeColor, checkboxWinemaker, setCheckboxWinemaker, handleChangeWinemaker, checkboxRegion, setCheckboxRegion, handleChangeRegion, resetFilter}}>
            {children}
        </AllWinesContext.Provider>
    );
}

