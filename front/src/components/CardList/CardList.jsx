// import react
import React, {useState} from 'react';
// import Card component
import Card from '../Card/Card';
// import data
import data from '../../data/data';
// import Scss
import './cardList.scss';



// Component Filter
function CardList() {

    const [state] = useState(data);



    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = `/wine/${e.target.id}`;
    }

    return (
        <div className="cardList">

            {state.wines.map(({
                id, size, color, alcohol, culture, price, name, winemaker, region, img
            }) => (

            <Card 
                key = {id}
                size={size}
                color={color}
                alcohol={alcohol}
                culture={culture}
                price={price}
                name={name}
                winemaker={winemaker}
                region={region}
                img={img}
                id={id}
                handleClick={handleClick}
            />
            ))}      
        </div>
    );
}

export default React.memo(CardList);