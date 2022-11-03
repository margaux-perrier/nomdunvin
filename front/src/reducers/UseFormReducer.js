import { useReducer } from 'react';


const SET_VALUE_INPUT = 'SET_VALUE_INPUT';
const SET_VALUE_INPUT_NUMBER = 'SET_VALUE_INPUT_NUMBER';
const RESET = 'RESET';




const formInitialState = {
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  confirmPassword: '',
  addressNumber: 10,
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
      console.log('jjjjjjjjjjjjjjj    +++++=     ', action.payload.name, action.payload.value)
      return {
        ...oldState,
        [action.payload.name]: action.payload.value,
      }
    }

    case SET_VALUE_INPUT_NUMBER : {
      return {
        ...oldState,
        [action.payload.name]: Number(action.payload.value),
      }
    }

    case RESET : {
      return formInitialState;
    }
    
    default:
      return oldState;
  };
}

export function getActionSetValue(name, value) {
  console.log('hello');

  return{
    type: SET_VALUE_INPUT,
    payload: {
      name, value,
    }
  };
}

// export function getActionSetValueNumber(name, value) {
//   return{
//     type: 'SET_VALUE_INPUT_NUMBER',
//     payload: {
//       name, value,
//     }
//   };
// }

export function getActionReset() {
  return {
    type: 'RESET',
  };
}

function UseFormReducer() {
  const[formState, formDispatch] = useReducer(formReducer, formInitialState);
  return {
    formState, formDispatch,
  };
}


export default UseFormReducer;