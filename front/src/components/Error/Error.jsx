
import React from 'react';
import wine from './break.jpg';
// import scss
import './error.scss';

// Component Header
function Error() {

    return (
        <div className="error">
            <h2>hic ! ...Plus une goûte par ici l'Ami... </h2>
            <div className="notFound">
                <h3 className="number-error">404</h3>
                <img className="glass" src={wine} alt="wine" />
                <p className="text-error">Page Not Found</p>
            </div>
        </div>
    );
}

export default React.memo(Error);
