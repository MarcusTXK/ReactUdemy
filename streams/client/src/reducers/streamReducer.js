import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      //... in front of _.mapKeys is to add the returned object in
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      //take all key values pairs out of state object and put it into a new object
      //add in a new key value pair (stream's id) : (stream object)
      return { ...state, [action.payload.id]: action.payload };
    //same syntax as fetch stream
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    //same syntax as fetch stream
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    //do not need to reference payload.id as the payload for delete stream is the id itself
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
