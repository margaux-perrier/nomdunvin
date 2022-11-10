// import React
import React, {useEffect, useContext} from 'react';
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
// import CartPage component
import CartPage from '../CartPage/CartPage';
// import SignUpForm component
import SignUpForm from '../SignUpForm/SignUpForm';
// import FormAddWine component
import FormAddWine from '../FormAddWine/FormAddWine';
// import UpdateCardList component
import UpdateCardList from '../UpdateCardList/UpdateCardList';



// import Context Provider
import { AllWinesProvider } from '../../Context/AllWinesContext';
import { LoginContextProvider } from '../../Context/loginContext';
import { CartContextProvider } from '../../Context/cartContext';

// import scss
import './App.scss';




// component App

function App() {

  
  return (

    <div className="App">

      <LoginContextProvider>
        <CartContextProvider>
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


          <Route path="/signup" element={
            <SignUpForm />
          } />

          <Route path="/cart" element={
            <CartPage />
          } />


          <Route path="/cart" element={
            <CartPage />
          } />

          <Route path="/addwine" element={
            <AllWinesProvider>
              <FormAddWine />
            </AllWinesProvider>
          } />

          <Route path="/admin" element={
            <AllWinesProvider>
              <UpdateCardList />
            </AllWinesProvider>
          } />


        </Routes>
        </CartContextProvider>


        <Footer />

      </LoginContextProvider>

    </div>
  );
}

export default React.memo(App);
