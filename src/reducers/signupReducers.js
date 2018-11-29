import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE 
} from '../actions/types';


const initialState = {
  message: '',
  user: {},
  status: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        status: "loading",
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        message: action.payload.error,
        status: "error",
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.payload,
        status: "success",
      };

    default:
      return state;
  }
}
