// import from React
import React from 'react';
//import image
import wine from './break.jpg';
// import scss
import './error.scss';

// Component Header
function Error() {
    return (
        <div className="error">
            <h2 className= "error-title">hic ! ...Plus une goûte par ici l'Ami... </h2>
            <h3 className="number-error">404</h3>
            <img className="glass-img" src={wine} alt="wine" />
            <p className="text-error">Page Not Found</p>
        </div>
    );
}

export default React.memo(Error);