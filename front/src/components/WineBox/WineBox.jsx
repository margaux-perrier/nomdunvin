import React from 'react'; 
import wineBox from './winebox3.png';  

import './WineBox.scss'; 

function WineBox(){
    return(
        <div className='overlay-box'> 
            <div className='box-container'>
                <div className='box-container_title'>
                    <h1>la box du mois</h1>
                </div>
                <div className='box-container_items'>
                    <div className='box-container_item box-container_item--left'>
                        <div className='item-content item-content--top'>
                            <p className='item-content_text'>Chaque mois<em className="item-content--highlighting"><br/>découvrez notre sélection !</em></p>
                            <p className='item-content_subtext'>2 bouteilles de vins<br/>finement sélectionnées</p>
                        </div>
                        <div className='item-content'>
                            <p className='item-content_text'>Un abonnement<em className="item-content--highlighting"><br/>sans engagement !</em></p>
                            <p className='item-content_subtext'>Abonnez-vous ou résiliez en 1 click</p>
                        </div>
                    </div>
                    <div className='box-container_image-container'>
                        <img  className="box-container_image" src={wineBox} alt="wine box"/>  
                    </div>
                    <div className='box-container_item box-container_item--right'>
                        <div className='item-content'>
                            <p className='item-content_text'>Une box<em className="item-content--highlighting "><br/>à partir de 20€/mois</em></p>
                            <p className='item-content_subtext'>livrée directement chez vous !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(WineBox); 