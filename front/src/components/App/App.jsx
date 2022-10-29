// import React
import React, { Fragment } from 'react';
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
      <div className="container">
        <Routes>
          <Route path="/" element={
            <Fragment>
              <Burger />
              <CardList />
            </Fragment>
          } />
          
          <Route path="*" element={<Error />} />

        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default React.memo(App);
