/* eslint-disable react/react-in-jsx-scope */
// import Header component
import Header from '../Header/Header';
import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
// import scss
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default React.memo(App);
