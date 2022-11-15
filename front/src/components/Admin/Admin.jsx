//import from React
import React, { useContext } from 'react';
// import loginContext
import { loginContext } from '../../Context/loginContext';
//import components
import Nav from './Nav';
//import from React router dom
import { Outlet } from 'react-router-dom';
// import Error component
import Error from '../Error/Error'

//css
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

            {!isLogged && (
                <Error />
            )}

        </div>
    )
}
export default React.memo(Admin); 