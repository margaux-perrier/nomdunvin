// import React
import React from 'react';
// import de Routes
import { Routes, Route } from 'react-router-dom';
//import Header component
import Header from '../Header/Header';
//import burger Component
import FilterMenu from '../FilterMenu/FilterMenu';
// import CardList component
import CardList from '../CardList/CardList';
// import Error component
import Error from '../Error/Error';
// import Details component
import Details from '../Details/Details';
// import Footer component
import Footer from '../Footer/Footer';
// import SignUpForm component
import SignUpForm from '../SignUpForm/SignUpForm';
// import AllWinesProvider
import { AllWinesProvider } from '../../Context/AllWinesContext';


// import scss
import './App.scss';


// component App

function App() {


  return (

    <div className="App">
    

      <Header />

      <Routes>
       
        <Route path="/" element={
          
          // provider for share data between FilterMenu and Cardlist

          <AllWinesProvider>
              <FilterMenu />
              <CardList />
       
              </AllWinesProvider>

        } />

        <Route path="*" element={
          <Error />
        } />

        <Route path="/wine/:id" element={
          <Details />
        } />

        <Route path="/sign-up" element={
          <SignUpForm />
        } />

       
      </Routes>


      <Footer />
    
    </div>
  );
}

export default React.memo(App);
