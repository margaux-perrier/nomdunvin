import React from 'react'; 
import './ReassuranceBanner.scss'; 
import delivery from './delivery.png'; 
import gift from './gift.png'; 
import cellarman from './cellarman.png'; 
import stars from './stars.png'; 

function ReassuranceBanner(){
    return(
        <div className="reassurance-banner">
            <ul className="reassurance-banner_sidebar">
            <li className="sidebar_item sidebar_item--selection"> 
                <img  className="sidebar_icon sidebar_icon--selection" src={stars} alt="icon selection"/>  
                <p>Une sélection<em className="sidebar_item--highlighting"><br/>aux petits oignons</em></p>
            </li>
            <li className="sidebar_item sidebar_item--chatbot"> 
                <img  className="sidebar_icon sidebar_icon--chatbot" src={cellarman} alt="icon chatbot"/>  
                <p>Un caviste<em className="sidebar_item--highlighting"><br/>virtuel</em></p>
            </li>
            <li className="sidebar_item sidebar__item--box"> 
                <img  className="sidebar_icon sidebar_icon--box" src={gift} alt="icon box"/>  
                <p>Surprises assurées<em class="sidebar_item--highlighting"><br/>avec la Box !</em></p>
            </li>
            <li class="sidebar_item sidebar_item--delivery"> 
                <img  className="sidebar_icon sidebar_icon--delivery" src={ delivery } alt="icon delivery"/>  
                <p>Livraison garantie<em className="sidebar_item--highlighting"><br/>sans casse</em></p>
            </li>
        </ul>
    </div>
    )
}

export default React.memo(ReassuranceBanner);