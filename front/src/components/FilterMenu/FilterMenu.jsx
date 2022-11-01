
// import de useState
import React, { useState } from 'react';
// import Scss
import './filterMenu.scss';

// Component Filter
function FilterMenu() {

    // State for the burger-menu on mobile
    const [showFilters, setShowFilters] = useState(false);
    // "Button Event" to open burger menu on mobile 
    const handleShowFilters = () => {setShowFilters(!showFilters);}


    return (

    // If the State "showLinks" is "true" we add the "show class" to the "menuCheckbox" to display it and if it is "false" we hide it
        <div className={`menuCheckbox ${showFilters ? "show" : "hide"}`}> 
            <div className="links">
                <div className= "color-filter">
                    <h3 className="checkbox-title"> Vous êtes plutôt ?</h3>
                    
                    <div className="checkbox">
                        <input type="checkbox" color="red" className="link" />
                        <label aria-describedby="label">Rouge</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" className="link" />
                        <label  aria-describedby="label">Blanc</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" className="link" />
                        <label aria-describedby="label">Rosé</label>
                    </div>
                    <div className="checkbox">
                        <button className="checkbox-btn">Valider</button>
                    </div>
                </div>
            </div>
            <button className="burger" onClick={handleShowFilters}>
                <span className="burger-bar"></span>
            </button>
        </div>
    );
}

export default React.memo(FilterMenu);