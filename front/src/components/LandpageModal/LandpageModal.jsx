import React,  {useState} from 'react'; 
import ReactDOM from 'react-dom';
import Logo from '../Header/logo.png'; 
import './LandpageModal.scss';

function LandpageModal({
    handleYesClick, 
    handleNoClick, 
    isWarningMessageOpen,
    setIsWarningMessageOpen
}){

    const [ isRememberMeChecked, setisRememberMeChecked ] = useState(true); 
    const rememberMe = localStorage.getItem('remember-me'); 
    
    return ReactDOM.createPortal(
        !rememberMe &&
        < div className='landpage-modal_overlay'>
            <div className='landpage-modal'>
                <img src={Logo} alt="website logo" className="landpage-modal_logo" />
                <div className='landpage-modal_warning'>
                    <p> Êtes-vous légalement en âge de consommer de l'acool dans votre pays de résidence ? </p> 
                </div>
                    { isWarningMessageOpen &&
                        <div class="ui warning message">
                        <i class="close icon" onClick={ () => setIsWarningMessageOpen(false) }></i>
                        <div class="header">
                          Vous devez être majeur pour accéder au site 
                        </div>
                      </div>
                    }

                    <div className='landpage-modal_buttons'>
                        <button className='landpage-modal_buttons--yes' onClick={ ()=> handleYesClick(isRememberMeChecked) }>OUI</button>
                        <button className='landpage-modal_buttons--no' onClick={ handleNoClick }>NON</button>
                    </div>
                    
                    <div className='landpage-modal_remember-me-checkbox'>
                        < input type='checkbox' checked={isRememberMeChecked} onChange={(e)=> setisRememberMeChecked(e.target.checked)} name='remember_me'/>
                        < label className='remember-me-checkbox_label'>Se souvenir de moi</label>
                    </div>
            </div>
        </div>, 
        document.body
    )
}

export default React.memo(LandpageModal); 