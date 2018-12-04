import {
    FETCH_PROFILE
} from '../actions/types';


const initialState = {
  user: {},
  profile: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload.userdata,
      };

    default:
      return state;
  }
}
