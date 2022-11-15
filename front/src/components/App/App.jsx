//import React
import React, { Fragment } from 'react';
//import from React router dom
import { Routes, Route } from 'react-router-dom';
//import components
import Header from '../Header/Header';
import FilterMenu from '../FilterMenu/FilterMenu';
import CardList from '../CardList/CardList';
import Error from '../Error/Error';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import CartPage from '../CartPage/CartPage';
import SignUpForm from '../SignUpForm/SignUpForm';
import FormAddWine from '../FormAddWine/FormAddWine';
import UpdateCardList from '../UpdateCardList/UpdateCardList';
import Admin from '../Admin/Admin';
//import context
import { AllWinesProvider } from '../../Context/AllWinesContext';
import { LoginContextProvider } from '../../Context/loginContext';
//import scss
import './App.scss';

function App() {
  return (

    <div className="App">

      <LoginContextProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <AllWinesProvider>
                <FilterMenu />
                <CardList />
              </AllWinesProvider>
            } />

          <Route
            path="*"
            element={
              <Error />
            } />

          <Route
            path="/wine/:id"
            element={
              <Details />
            } />

          <Route
            path="/signup"
            element={
              <SignUpForm />
            } />

          <Route
            path="/cart"
            element={
              <CartPage />
            } />

          <Route
            path='/admin'
            element={
              <Fragment>
                <Admin />
              </Fragment>
            }>

            <Route
              path="/admin"
              index
              element={
                <AllWinesProvider>
                  <FormAddWine />
                </AllWinesProvider>
              }
            />
            <Route
              path="/admin/updatewine"
              index
              element={
                <AllWinesProvider>
                  <UpdateCardList />
                </AllWinesProvider>
              }
            />

          </Route>
        </Routes>
        <Footer />
      </LoginContextProvider>

    </div>

  );
}

export default React.memo(App);
