import { useReducer } from "react";

const SET_LOGIN = 'SET_LOGIN';

const userInitialState = {
  loggedUser: {},
}

function userReducer(oldState, action) {
  switch (action.type) {
    case SET_LOGIN: {
      console.log('action', action.payload);
      return {
        ...oldState,
        loggedUser: action.payload
      }
    }

    default:
      return oldState;
  }
}

export function getActionUserLogged(user) {

  return {
    type: SET_LOGIN,
    payload: {
      user
    }
  }
}

function useUserReducer() {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  return {
    userState, userDispatch,
  }
}


export default useUserReducer;