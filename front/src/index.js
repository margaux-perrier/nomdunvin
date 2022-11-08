// import React
import React from 'react';
// import React-DOM
import ReactDOM from 'react-dom/client';
// import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
// import semantic Ui
import "semantic-ui-css/semantic.min.css";
// import App component
import App from './components/App/App';




// import Scss
import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
