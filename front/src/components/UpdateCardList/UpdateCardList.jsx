/* eslint-disable array-callback-return */

// import react
import React, { useContext, useState, Fragment } from 'react';
// import Navigate
import { useNavigate } from 'react-router-dom';
// import Card component
import UpdateCard from '../UpdateCard/UpdateCard';
// import semantic UI Elements
import { Segment, Input, Form } from 'semantic-ui-react';
// import AllWinesContext
import { AllWinesContext } from '../../Context/AllWinesContext';
// import deleteOneWine from services
import { deleteOneWine } from '../../services/WineApi.js';

// import PropTypes
import PropTypes from 'prop-types';
// import Scss
import './updateCardList.scss';



// Component CardList
function UpdateCardList() {

    //* STATE FOR UPDATECARDLIST *//

    // use Context for catch all wines
    const { wines, fetchWines } = useContext(AllWinesContext);

    // * NAVIGATE TO DETAILS PAGE * //

    // Stock useNavigate in constant
    const navigate = useNavigate();
    // Route to details page
    const handleClick = (e) => {
        e.preventDefault();
        const path = `/admin/wine/${e.target.id}`;
        navigate(path);
    }

    // * FUNCTION TO DELETE WINE * //

    const handleDeleteClick = (e) => {
        e.preventDefault();
        const id = Number(e.target.id);
        deleteOneWine(id)
            .then((response) => {
                fetchWines()
            })
            .catch((error) => {
                console.log('error', error);
            })
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





    // * RETURN *//
    return (
        <Fragment>
            
            <h1 className="update-title">Modifier ou supprimer un vin</h1>
            
            <div className="searchBar-admin">
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

                    <UpdateCard
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
                        handleDeleteClick={handleDeleteClick}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default React.memo(UpdateCardList);



// * PROP-TYPES *//

UpdateCardList.propTypes = {
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

