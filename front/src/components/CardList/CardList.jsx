// import react
import React from 'react';
// import Card component
import Card from '../Card/Card';
// import Scss
import './cardList.scss';

// Component Filter
function CardList() {

    

    return (
        <div className="cardList">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
                

   
    );
}

export default React.memo(CardList);