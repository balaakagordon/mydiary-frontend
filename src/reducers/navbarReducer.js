import {
    AUTHENTICATED,
    UNAUTHENTICATED
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.navbar, action) {
  switch (action.type) {
    case AUTHENTICATED:
        console.log('action ', action);
      return {
        ...state,
        authenticated: true
      };

      case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      };

      default:
      return state;
  }
}
