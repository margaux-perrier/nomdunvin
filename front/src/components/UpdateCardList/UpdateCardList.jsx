/* eslint-disable array-callback-return */
// import from react
import React, { useContext, useState, Fragment } from 'react';
//import react-router-dom
import { useNavigate } from 'react-router-dom';
// import component
import UpdateCard from '../UpdateCard/UpdateCard';
// import context
import { AllWinesContext } from '../../Context/AllWinesContext';
// import services
import { deleteOneWine } from '../../services/WineApi.js';
// import semantic UI Elements
import { Segment, Input, Form } from 'semantic-ui-react';
// import Scss
import './updateCardList.scss';

function UpdateCardList() {

    //STATE and CONTEXT
    const { wines, fetchWines } = useContext(AllWinesContext);
    const [search, setSearch] = useState('');


    // * NAVIGATE TO DETAILS PAGE * //
    const navigate = useNavigate();
    // Route to updatewine page
    const handleClick = (e) => {
        e.preventDefault();
        const path = `/admin/updatewine/${e.target.id}`;
        navigate(path);
    }

    // * FUNCTION TO DELETE WINE * //
    const handleDeleteClick = (e) => {
        e.preventDefault();
        const id = Number(e.target.id);
        deleteOneWine(id)
            .then(() => {
                fetchWines()
            })
            .catch((error) => {
                console.log('error', error);
            })
    }

    //* SEARCHBAR *//

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    // Filter for wines
    const getFilteredWine = () => wines.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));

    // filtered wines == wines
    let filteredWines = getFilteredWine();

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


            <div className="UpdateCardList">
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

