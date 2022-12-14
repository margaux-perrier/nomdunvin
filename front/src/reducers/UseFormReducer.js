//import from react
import { useReducer } from 'react';

//Setting cases in variables to avoid problems
const SET_VALUE_INPUT = 'SET_VALUE_INPUT';
const RESET = 'RESET';

//initial state
const formInitialState = {
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  confirmPassword: '',
  addressNumber: '',
  addressStreet: '',
  addressPostal: '',
  addressCity: '',
  newsletter: false,
  generalConditions: false,
  RGPD:false,
  connectionEmail: 'admin@admin.com',
  connexionPassword: '',  
}

function formReducer(oldState, action) {
  switch (action.type) {
    case SET_VALUE_INPUT : {
      return {
        ...oldState,
        [action.payload.name]: action.payload.value,
      }
    }

    case RESET : {
      return formInitialState;
    }
    
    default:
      return oldState;
  };
}

//Action Creators
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

//ACTION CREATORS
function UseFormReducer() {
  const[formState, formDispatch] = useReducer(formReducer, formInitialState);
  return {
    formState, formDispatch,
  };
}

export default UseFormReducer;