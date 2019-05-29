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
        profile: action.payload.userdata,
      };

    default:
      return state;
  }
}
