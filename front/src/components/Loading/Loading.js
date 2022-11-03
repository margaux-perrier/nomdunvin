// Import React
import React from 'react';
// == Import
import './loading.scss';

// Fonction Loading

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

// == Export
export default React.memo(Loading);
