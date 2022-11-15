//import from React
import React from 'react';
//import css
import './loading.scss';

function Loading() {
  return (
    <div className="">
      <div className="loader" />
      <div className="spinner">
        <div className="spinner-container">
          <div className="spinner-icon" />
        </div>
      </div>
      <div className="text-loader">
        <p>Is Loading...</p>
      </div>
    </div>
  );
}

export default React.memo(Loading);
