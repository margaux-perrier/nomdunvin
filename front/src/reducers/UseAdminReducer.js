import { useReducer } from 'react';


const SET_VALUE_INPUT = 'SET_VALUE_INPUT';
const RESET = 'RESET';

const addWineInitialState = {
  name:'JOJO',
  appelation:'',
  color: '',
  description: '',
  winemaker: '',
  region: '',
  size: '',
  vintage: '',
  alcool: '',
  cultures:{
    bio: true,
    biodynamie: false,
    HVE: false,
    Nature: false,
    Raisonnée: true,
    SansSulfites: false,
    Vegan: false
  },
  grapevariety: {
    Auxerrois: false,
    CabernetFranc: true,
    CarbernetSauvignon: true,
    Carignan: false,
    Chardonnay: false,
    Chenin: false,
    Cinsault: false,
    Clairette: false,
    Gamay: false,
    Grenache: false,
    Merlot: true,
    PinotGris: false,
    Riesling: false,
    Roussanne: false,
    Syrah: false,
    Tannat: false,
    Viognier: false
  },
  dish: {
    Apero: false,
    Veggie: true,
    Cheese: true,
    Meat: true,
    Sugar: false,
    Fish: false
  },
  image: '',
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