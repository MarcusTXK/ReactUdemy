import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITAL_STATE = {
  isSignedIn: null,
  userId: null
};

//If this reducer gets called with a first argument value of undefined
//then state will be set equal to INITAL_STATE
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT: //clear userId when user signs out
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
