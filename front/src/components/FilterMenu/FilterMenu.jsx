/* eslint-disable react-hooks/exhaustive-deps */

// import React from "react";
import React, { useContext, useEffect } from "react";
// import context
import { AllWinesContext } from "../../Context/AllWinesContext";
// import Menu from react-burger-menu
import { slide as Menu } from "react-burger-menu";
// import Logo
import Logo from "./logo.png";
// import Scss
import "./filterMenu.scss";


// component FilterMenu
const FilterMenu = () => {

    // * CREATE FILTER BY COLOR FOR FILTERMENU  * //

    // Catch data from AllWinesContext
    const { wines, checkboxColor, setCheckboxColor, handleChangeColor } = useContext(AllWinesContext);
    // Map on wines for create array with all color
    const colorList = wines.map((wine) => wine.color);
    // set color in Set for delete duplicate (unique color)
    const colors = [...new Set(colorList)];
    // create object with color and boolean value for checkbox
    const colorObject = colors.map((color) => ({ color, value: false }));
    // Push object in checkboxColor state

    // * CREATE FILTER BY WINEMAKER FOR FILTERMENU  * //

    // Catch data from AllWinesContext
    const { checkboxWinemaker, setCheckboxWinemaker, handleChangeWinemaker } = useContext(AllWinesContext);
    // Map on wines for create array with all winemaker
    const winemakerList = wines.map((wine) => wine.winemaker.name);
    // set winemaker in Set for delete duplicate (unique winemaker)
    const winemakers = [...new Set(winemakerList)];
    // create object with winemaker and boolean value for checkbox
    const winemakerObject = winemakers.map((winemaker) => ({ winemaker, value: false }));
    // Push object in checkboxWinemaker state

    // * CREATE FILTER BY REGION FOR FILTERMENU  * //

    // Catch data from AllWinesContext
    const { checkboxRegion, setCheckboxRegion, handleChangeRegion } = useContext(AllWinesContext);
    // Map on wines for create array with all region
    const regionList = wines.map((wine) => wine.region.name);
    // set region in Set for delete duplicate (unique region)
    const regions = [...new Set(regionList)];
    // create object with region and boolean value for checkbox
    const regionObject = regions.map((region) => ({ region, value: false }));
    // Push object in checkboxRegion state

    // * RESET FILTER *//
    const { resetFilter } = useContext(AllWinesContext);

    useEffect(() => {
        setCheckboxRegion(regionObject);
        setCheckboxColor(colorObject);
        setCheckboxWinemaker(winemakerObject);
    }, [wines]);



    //* RETURN *//

    return (
        <Menu>
            <div className="menu-logo">
                <img src={Logo} className="logo" alt="logo" />
            </div>
            <div className="menu-title">
                <h2>Êtes vous plûtot ?</h2>
            </div>

            <form className="menu-item">

                {checkboxColor.map((item) => (
                    <div key={item.color} className="checkbox">
                        <input
                            type="checkbox"
                            value={item.color}
                            onChange={handleChangeColor}
                            index={checkboxColor.indexOf(item)}
                            checked={item.value}

                        />
                        <label className="checkbox-title">Vin {item.color}</label>
                    </div>
                ))}
            </form>

            <div className="menu-title">
                <h2>Un vigneron préféré ?</h2>
            </div>

            <form className="menu-item">
                {checkboxWinemaker.map( item => (
                    <div key={item.winemaker} className="checkbox">
                        <input
                            type="checkbox"
                            value={item.winemaker}
                            onChange={handleChangeWinemaker}
                            index={checkboxWinemaker.indexOf(item)}
                            checked={item.value}
                        />
                        <label className="checkbox-title">{item.winemaker}</label>
                    </div>
                ))}
            </form>

            <div className="menu-title">
                <h2>Une région particulière ?</h2>
            </div>

            <form className="menu-item">
                {checkboxRegion.map((item) => (
                    <div key={item.region} className="checkbox">
                        <input
                            type="checkbox"
                            value={item.region}
                            onChange={handleChangeRegion}
                            index={checkboxRegion.indexOf(item)}
                            checked={item.value}
                        />
                        <label className="checkbox-title">{item.region}</label>
                    </div>
                ))}

            </form>
            <button onClick={resetFilter} className="menu-button-reset">Réinitialiser mes choix</button>
        </Menu>
    );
};

export default FilterMenu;
