import React from 'react';
import image from './photo_winemaker.png'
import './WinemakerStyles.scss';

function Winemaker() {
  return(
    <div className='winemaker_container'>
      <div className='image_container'>
        <img className='winemaker_photo' src={image} alt='photo'/>
      </div>
      <p className='winemaker_name'>
        domaine Johnny Joe
      </p>
      <p className='winemaker_region'>
        Côtes du rhône
      </p>
      <p className='winemaker_appellation'>
        Appellation
      </p>
    </div>
  )
}

export default React.memo(Winemaker);