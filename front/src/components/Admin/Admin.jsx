//import from React
import React, {useContext}from 'react'; 
import { loginContext } from '../../Context/loginContext';

//import components
import Nav from './Nav'; 

//import from React router dom
import { Outlet, useNavigate} from 'react-router-dom';

//css
import './Admin.scss';

function Admin(){

    const {  isRoleAdmin } = useContext(loginContext);


    const navigate=useNavigate();

    return(

       
        <div className='admin_container'>
            {isRoleAdmin && (
                 <div>
                <Nav />
                <Outlet/>
                </div>
             )}

            {!isRoleAdmin && (
                 navigate('/')
             )}
           
        </div>
    )
}
export default React.memo(Admin); 