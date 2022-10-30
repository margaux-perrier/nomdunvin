// import react
import React from 'react';
// import Card component
import Card from '../Card/Card';
// import data
import data from '../../data/data';
// import Scss
import './cardList.scss';



// Component Filter
function CardList() {

    

    return (
        <div className="cardList">

            {data.wines.map(({
                size, color, alcohol, culture, price, name, winemaker, region, img
            }) => (

            <Card 
                size={size}
                color={color}
                alcohol={alcohol}
                culture={culture}
                price={price}
                name={name}
                winemaker={winemaker}
                region={region}
                img={img}

           
            />
            ))}

            
            
        </div>
                

   
    );
}

export default React.memo(CardList);