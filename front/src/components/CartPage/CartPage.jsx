import React from 'react'; 
import './cartPage.scss';

import reactLogo from './logo192.png';

function CartPage(){
    return(
        
         <main className ='cartcontainer'>
            <h1 className = 'cartcontainer_title'>Votre panier</h1>
    
            <table className="ui celled single line table">
                <thead>
                    <tr><th>Article</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                </tr></thead>
                <tbody>
                    <tr>
                        <td data-label="Article">
                            <img className='article_image' src={reactLogo} alt='photo du vin'/>
                            Large soif blanc
                        </td>
                        <td data-label="Prix">11</td>
                        <td data-label="Quantité">
                            <div class="ui input">
                                <input type="number" min='1'/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Article">Large soif rosé</td>
                        <td data-label="Prix">11</td>
                        <td data-label="Quantité">
                            <div class="ui input">
                                <input type="number" min='1'/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
         </main>
        
    )
}

export default React.memo(CartPage); 