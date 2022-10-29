
import React from 'react';
import wine from './wine.jpg';
import './error.scss';

// Component Header
function Error() {

 return (
    <div className="error">
        <h1>404</h1>
        <h2>Page not found</h2>
    </div>
    );
}

export default React.memo(Error);
