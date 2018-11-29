import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST
} from './types';


const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';

export const signupRequest = data => (dispatch) => {
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

export const signupAction = userdata => (dispatch) => {
    dispatch(signupRequest());
    return fetch(`${baseurl}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userdata),
  })
    .then(res => res.json())
    .then((data) => {
      if (data["Input error"]) {
        const payload = {
          error: data["Input error"],
          message: "Missing field(s)"
        }
        dispatch(signupFailure(payload));
      } else if (data.message === "This user already exists!") {
        const payload = {
          message: "User exists",
          error: data.message
        }
        dispatch(signupFailure(payload));
      } else if (data.message === "Invalid input") {
        const payload = data;
        dispatch(signupFailure(payload));
      } else if (data.message === "Registered Successfully!") {
        const payload = data;
        dispatch(signupSuccess(payload));
        }
    });
};
