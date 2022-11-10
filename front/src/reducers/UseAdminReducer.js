import { useReducer } from 'react';


const SET_VALUE_INPUT = 'SET_VALUE_INPUT';
const RESET = 'RESET';

const addWineInitialState = {
  name:'',
  appellation:'',
  color: '',
  description: '',
  winemaker: '',
  region: '',
  size: '',
  vintage: '',
  alcool: '',
  Bio: false,
  Biodynamie: false,
  HVE: false,
  Nature: false,
  Raisonnée: false,
  'Sans sulfites': false,
  Vegan: false, 
  Auxerrois: false,
  'Cabernet franc': false,
  'Cabernet sauvignon': false,
  Carignan: false,
  Chardonnay: false,
  Chenin: false,
  Cinsault: false,
  Clairette: false,
  Gamay: false,
  Grenache: false,
  Merlot: false,
  'Pinot Gris': false,
  Riesling: false,
  Roussanne: false,
  Syrah: false,
  Tannat: false,
  Viognier: false, 
  'apéro des copains': false,
  'instants veggies': false,
  'le fromage': false,
  'les carnivores !': false,
  'plaisirs sucrés': false,
  'retour de pêche': false,  
  avatar: '',
  price: '',
}


function adminReducer(oldState, action) {
  switch (action.type) {
    case SET_VALUE_INPUT : {
      return {
        ...oldState,
        [action.payload.name]: action.payload.value,
      }
    }

    

    case RESET : {
      return addWineInitialState;
    }
    
    default:
      return oldState;
  };
}

export function getActionSetValue(name, value) {
 

  return{
    type: SET_VALUE_INPUT,
    payload: {
      name, value,
    }
    
  };
}

export function getActionReset() {
  return {
    type: 'RESET',
  };
}

function UseAdminReducer() {
  const[adminState, adminDispatch] = useReducer(adminReducer, addWineInitialState);
  return {
    adminState, adminDispatch,
  };
}

export default UseAdminReducer;