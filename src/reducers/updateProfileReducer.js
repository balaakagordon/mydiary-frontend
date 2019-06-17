import {
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.getProfile, action) {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };

      case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          id: action.payload.data.id,
          firstName: action.payload.data.firstName,
          lastName: action.payload.data.lastName,
          email: action.payload.data.email,
          image: action.payload.data.image,
          lastUsed: null,
          currentEntries: action.payload.data.currententries,
          allEntries: action.payload.data.allentries,
          notifications: action.payload.data.notifications,
          createdAt: action.payload.data.created_at
        },
        loading: false,
        status: action.payload.status
      };

      case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        errors: null, //
        loading: false,
        status: action.payload.status
      };

    default:
      return state;
  }
}
