// import React
import React from 'react';
// import de Routes
import { Routes, Route } from 'react-router-dom';
//import Header component
import Header from '../Header/Header';
//import burger Component
import Burger from '../FilterMenu/FilterMenu';
// import CardList component
import CardList from '../CardList/CardList';
// import Error component
import Error from '../Error/Error';
// import Details component
import Details from '../Details/Details';
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

        <Route path="/wine" element={
          <Details />
        } />

      </Routes>
      <Footer />

    </div>
  );
}

export default React.memo(App);
