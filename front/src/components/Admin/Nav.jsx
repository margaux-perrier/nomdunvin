//import from React
import React from 'react';
//import from React router dom
import { NavLink } from 'react-router-dom';
//import components
import { Menu } from 'semantic-ui-react';
//import css
import './Nav.scss';

function Nav() {
  return (
    
    <div className='ui red two item fluid menu'>

      <Menu.Item
        as={NavLink} 
        to="/admin" 
        end
      >
        Ajouter un vin
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        to="/admin/updatewine"
        end
      >
        Modifer un vin
      </Menu.Item>

    </div>

  );
}

export default React.memo(Nav);