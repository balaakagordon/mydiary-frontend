import {
    GET_ENTRY_REQUEST,
    GET_ENTRY_SUCCESS,
    GET_ENTRY_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.getEntry, action) {
  switch (action.type) {
    case GET_ENTRY_REQUEST:
      return {
        ...state,
        status: "loading",
        loading: true,
      };

    case GET_ENTRY_FAILURE:
      return {
        ...state,
        loading: false,
        message: `Unable to load entry`,
        errors: action.payload.data,
        status: action.payload.status,
      };

    case GET_ENTRY_SUCCESS:
      return {
        ...state,
        entry: {
            id: action.payload.data.id,
            author: action.payload.data.author,
            title: action.payload.data.title,
            body: action.payload.data.body,
            lastEdited: action.payload.data.updated_at
        },
        loading: false,
        status: action.payload.status,
        message: action.payload.message
      };

    default:
      return state;
  }
}
