//import from react
import React from 'react';
//import from react-router-dom
import ReactDOM from 'react-dom/client';
//import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
//import component
import App from './components/App/App';
//import context
import { LoginContextProvider } from './Context/loginContext';
//import semantic Ui
import "semantic-ui-css/semantic.min.css";
//import css
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginContextProvider>
  </React.StrictMode>
);
