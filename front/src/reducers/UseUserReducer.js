import { useReducer } from "react";

//Setting cases in variables to avoid problems
const SET_LOGIN = 'SET_LOGIN';

//initial state
const userInitialState = {
  loggedUser: {},
}

function userReducer(oldState, action) {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...oldState,
        loggedUser: action.payload
      }
    }
    default:
      return oldState;
  }
}

//ACTION CREATOR
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