//import from React

import React, { useContext } from 'react'; 
//import from React router dom
import { Outlet } from 'react-router-dom';
//import context
import { loginContext } from '../../Context/loginContext';
//import components
import Nav from './Nav'; 

import Error from '../Error/Error'
//import css
import './Admin.scss';

function Admin() {

    const { isRoleAdmin, isLogged } = useContext(loginContext);



    return (
        <div className='admin_container'>
            
            {isRoleAdmin && (
                <div>
                    <Nav />
                    <Outlet />
                </div>
            )}

            {!isRoleAdmin && (
                <Error />
            )}

            {(!isRoleAdmin || !isLogged) && (
                 <Error/>
             )}

        </div>
    )
};

export default React.memo(Admin); 