// import React from "react";
import React, {useEffect, useState} from "react";
// import Menu fro: react-burger-menu
import { slide as Menu } from "react-burger-menu";
// import Logo
import Logo from "./logo.png";
// import Scss
import "./filterMenu.scss";




// component FilterMenu

const FilterMenu = () => {


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
                    <input type="checkbox" />
                    <label className="checkbox-title">Vin rouge</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" />
                    <label className="checkbox-title">Vin blanc</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" />
                    <label className="checkbox-title">Vin rosé </label>
                </div>
                <button className="checkbox-button">Valider</button>
            </form>
        </Menu>
    );
};

export default FilterMenu;
