import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

function Modal({
    size,
    color,
    price,
    name,
    winemaker,
    appellation,
    img,
    isOpen, 
    setIsOpen
}) {

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
                            <img src={img} alt={`${winemaker} ${name}`}/>
                        </div>
                        
                        
                        <div className = "modal_content_infos">
                            <h2 className ="modal_content_infos_winemaker">{winemaker}</h2> 
                            <p className="modal_content_infos_wine-name">{name}</p>
                            <p className = "modal_content_infos_wine-appellation">{appellation}</p>
                            <span className={`modal_content_infos_wine-size`}>{size}</span> 
                            <i class={`tablet-color-${color} circle mini icon`}></i>
                            <span className='modal_content_infos_wine-price'>{price} € T.T.C</span>


                            <form className="modal_form">
                                <input className="modal_form_input" type="number" name="quantity" placeholder="0" min="1" max="50" />
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