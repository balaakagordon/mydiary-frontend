import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.signup, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        status: "loading",
        loading: true,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.data,
        status: action.payload.status,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: `Welcome, ${action.payload.data.firstName}`,
        status: action.payload.status,
        token: action.payload.data.token
      };

    default:
      return state;
  }
}
