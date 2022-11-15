//import from React
import React, {useContext}from 'react'; 
import { loginContext } from '../../Context/loginContext';

//import components
import Nav from './Nav'; 

//import from React router dom
import { Outlet, useNavigate} from 'react-router-dom';
import Error from '../Error/Error'

//css
import './Admin.scss';

function Admin(){

    const {  isRoleAdmin, isLogged } = useContext(loginContext);
    const navigate=useNavigate();

    return(

       
        <div className='admin_container'>
            {isRoleAdmin && (
                 <div>
                    <Nav />
                    <Outlet/>
                </div>
             )}

            {(!isRoleAdmin || !isLogged)  && (
                 <Error/>
             )}

            
           
        </div>
    )
}
export default React.memo(Admin); 