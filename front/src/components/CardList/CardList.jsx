// import react
import React, { useState, useEffect } from 'react';
// import Navigate
import { useNavigate } from 'react-router-dom';
// import Card component
import Card from '../Card/Card';
//import de fecthWinesAPI
import { fetchAllWines } from '../../services/fecthWinesAPI.js'
// impoort Scss
import './cardList.scss';


// Component CardList
function CardList() {

    // Stock Data in State
    const [wines, setWines] = useState([]);

    // Stock useNavigate in constant
    const navigate = useNavigate();

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
    useEffect(() => {

        fetchWines();

    }, []);


    return (
        <div className="cardList">

            {wines.map(({
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
    );
}

export default React.memo(CardList);