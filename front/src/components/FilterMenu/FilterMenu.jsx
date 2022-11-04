// import React from "react";
import React, {useContext} from "react";
// import Menu fro: react-burger-menu
import { slide as Menu } from "react-burger-menu";
// import Logo
import Logo from "./logo.png";
// import Context
import { WineColorContext } from "../../Context/WineColorContext";
// import Scss
import "./filterMenu.scss";




// component FilterMenu

const FilterMenu = () => {

    // import handleChange from Context
    const { handleChange } = useContext(WineColorContext);

    // import the options of state WineColorContext from Context
    const { rouge, blanc, rose} = useContext(WineColorContext);
    
    return (
        <Menu>
            <div className="menu-logo">
                <img src={Logo} className="logo" alt="logo" />
            </div>
            <div className="menu-title">
                <h2>Êtes vous plûtot ?</h2>
            </div>

            <form className="menu-item">
                <div className="checkbox">
                    <input 
                    type="checkbox" 
                    name="rouge"
                    checked={rouge}
                    onChange={handleChange}
                    />
                    <label className="checkbox-title">Vin rouge</label>
                </div>

                <div className="checkbox">
                    <input 
                    type="checkbox"
                    name="blanc"
                    checked={blanc}
                    onChange={handleChange}
                    />
                    <label className="checkbox-title">Vin blanc</label>
                </div>

                <div className="checkbox">
                    <input 
                    type="checkbox"
                    name="rose"
                    checked={rose}
                    onChange={handleChange}
                    />
                    <label className="checkbox-title">Vin rosé </label>
                </div>
                
            </form>
        </Menu>
    );
};

export default FilterMenu;
