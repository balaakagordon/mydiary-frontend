import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
} from '../actions/types';


const initialState = {
  message: '',
  user: {},
  status: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        status: "loading",
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        status: "error",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        status: "success",
      };

    default:
      return state;
  }
}
