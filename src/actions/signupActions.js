import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST
} from './types';

export const signupRequest = () => (dispatch) => {
  dispatch({
    type: SIGNUP_REQUEST
  });
};

export const signupSuccess = data => (dispatch) => {
  dispatch({
    type: SIGNUP_SUCCESS,
    payload: data,
  });
};

export const signupFailure = data => (dispatch) => {
  dispatch({
    type: SIGNUP_FAILURE,
    payload: data,
  });
};

