/* eslint-disable array-callback-return */

// import react

import React, { useState, Fragment, useContext } from 'react';
// import Navigate
import { useNavigate } from 'react-router-dom';
// import Card component
import Card from '../Card/Card';
// import semantic UI Elements
import { Segment, Input, Form } from 'semantic-ui-react';
// import AllWinesContext
import { AllWinesContext } from '../../Context/AllWinesContext';
//import loginContext

// import PropTypes
import PropTypes from 'prop-types';

// import Scss
import './cardList.scss';



// Component CardList
function CardList() {

    //* STATE FOR CARDLIST *//

    // use Context for catch all wines
    const { wines } = useContext(AllWinesContext);

    // Check for login
    // const { TokenVerify } = useContext(loginContext);
    // useEffect(() => {
    //     TokenVerify()
    // }, [])


    // * NAVIGATE TO DETAILS PAGE * //


    // Stock useNavigate in constant
    const navigate = useNavigate();
    // Route to details page
    const handleClick = (e) => {
        e.preventDefault();
        const path = `/wine/${e.target.id}`;
        navigate(path);
    }

    //* SEARCHBAR *//

    // Stock Search in State
    const [search, setSearch] = useState('');

    //  change value of search
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    // Filter for wines
    const getFilteredWine = () => wines.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));


    // filtered wines == wines
    let filteredWines = getFilteredWine();


    //* USE CONTEXT FOR FILTERS BY COLOR *//

    // Catch state for color Checkbox from AllWinesContext
    const { checkboxColor } = useContext(AllWinesContext);

    // filter for wines, loop on checkboxColor and return wines with checked value
    const filteredMenu = filteredWines.filter((wine) => {
        // use loop for check if checkbox is checked
        for (let i = 0; i < checkboxColor.length; i++) {
            // if checkbox is checked return wines with color checked
            if (checkboxColor[i].value === true && wine.color === checkboxColor[i].color) {
                // return filtered wines
                return wine;
            }
        }
    });
    // if checkbox is checked return filteredWines = filteredMenu
    for (let i = 0; i < checkboxColor.length; i++) {
        if (checkboxColor[i].value === true) {
            filteredWines = filteredMenu;
        }
    }

    // *  USE CONTEXT FOR FILTERS BY WINEMAKERS *//

    // Catch state for winemaker Checkbox from AllWinesContext
    const { checkboxWinemaker } = useContext(AllWinesContext);
    // filter for wines, loop on checkboxWinemaker and return wines with checked value  
    const filteredMenuWinemaker = filteredWines.filter((wine) => {
        // use loop for check if checkbox is checked
        for (let i = 0; i < checkboxWinemaker.length; i++) {
            // if checkbox is checked return wines with winemaker checked
            if (checkboxWinemaker[i].value === true && wine.winemaker.name === checkboxWinemaker[i].winemaker) {
                // return filtered wines
                return wine;
            }
        }
    });
    // if checkbox is checked return filteredWines = filteredMenuWinemaker
    for (let i = 0; i < checkboxWinemaker.length; i++) {
        if (checkboxWinemaker[i].value === true) {
            filteredWines = filteredMenuWinemaker;
        }
    }


    // * USE CONTEXT FOR FILTERS BY REGION *//

    // Catch state for region Checkbox from AllWinesContext 
    const { checkboxRegion } = useContext(AllWinesContext);
    // filter for wines, loop on checkboxRegion and return wines with checked value
    const filteredMenuRegion = filteredWines.filter((wine) => {
        // use loop for check if checkbox is checked
        for (let i = 0; i < checkboxRegion.length; i++) {
            // if checkbox is checked return wines with region checked
            if (checkboxRegion[i].value === true && wine.region.name === checkboxRegion[i].region) {
                // return filtered wines
                return wine;
            }
        }
    });
    // if checkbox is checked return filteredWines = filteredMenuRegion
    for (let i = 0; i < checkboxRegion.length; i++) {
        if (checkboxRegion[i].value === true) {
            filteredWines = filteredMenuRegion;
        }
    }




    // * RETURN *//
    return (
        <Fragment>

            <div className="searchBar">
                <Segment style={{ width: '70%' }}>
                    <Form >
                        <Input focus fluid icon="search" iconPosition="left" placeholder="Rechercher un vin" onChange={handleSearch} value={search} />
                    </Form>
                </Segment>
            </div>


            <div className="cardList">
                {filteredWines.map(({
                    id, size, color, alcohol, price, name, avatar, winemaker, appellation, culture
                }) => (

                    <Card
                        key={id}
                        size={size}
                        color={color}
                        alcohol={alcohol}
                        culture={culture}
                        price={price}
                        name={name}
                        winemaker={winemaker.name}
                        appellation={appellation}
                        img={avatar}
                        id={id}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default React.memo(CardList);



// * PROP-TYPES *//

CardList.propTypes = {
    wines: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            size: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            alcohol: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            winemaker: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }).isRequired,
            appellation: PropTypes.string.isRequired,
            culture: PropTypes.string.isRequired,
        }).isRequired,
    )
};

