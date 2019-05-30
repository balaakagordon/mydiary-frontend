import {
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE
} from '../actions/types';


const initialState = {
  user: {},
  profile: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };

      case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          firstName: null,
          lastName: null,
          email: null,
          numEntries: null,
          joined: null
        },
        loading: false,
        status: action.payload.status
      };

      case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        errors: null,
        loading: false,
        status: action.payload.status
      };

    default:
      return state;
  }
}
