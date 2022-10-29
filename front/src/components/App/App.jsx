// import React
import React from 'react';
//import header
import Header from '../Header/Header';
//import burger
import Burger from '../FilterMenu/FilterMenu';
// import de cardList
import CardList from '../CardList/CardList';
// import Error 404
import Error from '../Error/Error';
// import de Routes
import { Routes, Route } from 'react-router-dom';




// import Footer component
import Footer from '../Footer/Footer';
// import scss
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />


      <Routes>

        <Route path="/" element={
          <div className='container'>
            <Burger />
            <CardList />
          </div>
        } />


        <Route path="*" element={
          <Error />
        } />
      </Routes>

      <Footer />

    </div>
  );
}

export default React.memo(App);
