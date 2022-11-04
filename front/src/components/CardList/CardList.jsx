// import react
import React, { useState, useEffect, Fragment, useContext } from 'react';
// import Navigate
import { useNavigate } from 'react-router-dom';
// import Card component
import Card from '../Card/Card';
//import de fecthWinesAPI
import { fetchAllWines } from '../../services/fecthWinesAPI.js'
// import semantic UI Elements
import { Segment, Input, Form } from 'semantic-ui-react';
// import Context
import { WineColorContext } from '../../Context/WineColorContext';
// import Scss
import './cardList.scss';




// Component CardList
function CardList() {

    // Stock Data in State
    const [wines, setWines] = useState([]);

    // Stock useNavigate in constant
    const navigate = useNavigate();

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


    // Route to details page
    const handleClick = (e) => {
        e.preventDefault();
        const path = `/wine/${e.target.id}`;
        navigate(path);
    }

    // Update State with Data API
    const fetchWines = async () => {
        const response = await fetchAllWines();
        setWines(response);
    }

    // Use Effect

    useEffect(() => { fetchWines();}, []);


    // import Checkbox from Context
    const { checkbox } = useContext(WineColorContext);

    // Filter State by checkbox checked in Context 
     const filteredMenu = filteredWines.filter(wine => {

        if (checkbox.rouge === true && wine.color === 'rouge') { return wine; }

        else if (checkbox.blanc === true && wine.color === 'blanc') { return wine; }

        else if (checkbox.rose === true && wine.color === 'rosé') { return wine; }
        
    }
    );

    // if checkbox is checked, filteredWines ELSE filteredMenu
    filteredWines = checkbox.rouge || checkbox.blanc || checkbox.rose ? filteredMenu : getFilteredWine();





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
                    id, size, color, alcohol, price, name, avatar, winemaker, region, culture
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
                        region={region.name}
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