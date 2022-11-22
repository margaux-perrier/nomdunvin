import React, {useState} from 'react';
import Winemaker from '../Winemaker/Winemaker';
import { Segment, Input, Form } from 'semantic-ui-react';

import './WinemakerPageStyles.scss';



function WinemakerPage() {

  const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

  return(
    <div className='winemaker_page-main-container'>
      <div>
        <h1 className='winemaker_page-title'>LES VIGNERONS</h1>
      </div>
      <div className='winemaker_page-searchbar'>
      <Segment style={{ width: '70%' }}>
        <Form >
          <Input focus fluid icon="search" iconPosition="left" placeholder="Rechercher un vin" onChange={handleSearch} value={search}  />
        </Form>
      </Segment>
      </div>
    <div className='winemaker_page-container'>
      <Winemaker/>
      <Winemaker/>
      <Winemaker/>
      <Winemaker/>
      <Winemaker/>
      <Winemaker/>
      <Winemaker/>
    </div>
    </div>
  )
}

export default React.memo(WinemakerPage);