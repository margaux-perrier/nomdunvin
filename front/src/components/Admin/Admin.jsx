//import from React
import React from 'react'; 
//import components
import Nav from './Nav'; 

//import from React router dom
import { Outlet} from 'react-router-dom';

//css
import './Admin.scss';

function Admin(){
    return(
        <div className='admin_container'>
            <Nav />
           <Outlet/>
        </div>
    )
}
export default React.memo(Admin); 