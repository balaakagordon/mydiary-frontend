import {
    UPDATE_ENTRY_REQUEST,
    UPDATE_ENTRY_SUCCESS,
    UPDATE_ENTRY_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.writeEntry, action) {
  switch (action.type) {
    case UPDATE_ENTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data
      };

    case UPDATE_ENTRY_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        message: action.payload.message
      };

    default:
      return state;
  }
}
