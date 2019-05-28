import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.login, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        status: "loading",
        loading: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.data,
        status: action.payload.status,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: `Welcome back, ${action.payload.data.firstName}`,
        status: action.payload.status,
        token: action.payload.data.token
      };

    default:
      return state;
  }
}
