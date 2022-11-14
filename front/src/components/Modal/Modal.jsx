import React,  { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { addWineToCart } from '../../utils';
import { CartContext } from '../../Context/cartContext';
import './Modal.scss';

function Modal({
    id, 
    size,
    color,
    price,
    name,
    winemaker,
    appellation,
    avatar,
    isOpen, 
    setIsOpen
}) {

    const [ quantity, setQuantity ] = useState(1);
    const [IsMessageOpen, setIsMessageOpen] = useState(false); 

    const wine = {
        id, 
        size, 
        color,
        price, 
        name, 
        winemaker,
        appellation, 
        avatar, 
        quantity
    }

    const handleSubmitQuantityForm = (e) => {
        e.preventDefault(); 
        addWineToCart(wine , quantity); 
        setIsMessageOpen(true);
        setTimeout(()=>{
            setIsOpen(false)
        }, "1000");
    }
    
    return ReactDOM.createPortal(
        
        isOpen && 
        <div className = "overlay">
                <div className="modal">
                    <div className = "modal_header"> 
                        <h1 className ="modal_header_title" >Ajout dans votre panier</h1>
                        <button className="modal_header_button" onClick = {()=>setIsOpen(false)}>x</button>
                    </div>
                    <div className = "modal_content">
                        <div className="modal_content_image">
                            <img src={avatar} alt={`${winemaker} ${name}`}/>
                        </div>
                        
                        <div className = "modal_content_infos">
                            <h2 className ="modal_content_infos_winemaker">{winemaker.name}</h2> 
                            <p className="modal_content_infos_wine-name">{name}</p>
                            <p className = "modal_content_infos_wine-appellation">{appellation}</p>
                            <span className={`modal_content_infos_wine-size`}>{size}</span> 
                            <i class={`tablet-color-${color} circle mini icon`}></i>
                            <span className='modal_content_infos_wine-price'>{price} € T.T.C</span>
                            
                            {IsMessageOpen && 
                            <div class="ui green message">Bien ajouté au panier</div>
                            }
                            <form className="modal_form" onSubmit={handleSubmitQuantityForm}>
                                <input className="modal_form_input" type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="0" min="1" max="50" />
                                <button className="modal_form_btn">Ajouter au panier</button>
                            </form>
                        </div>

                    </div>
            </div>
        </div>, 
        document.body
    )
}

export default React.memo(Modal);