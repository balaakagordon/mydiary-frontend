import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
} from './types';


const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';

export const loginSuccess = data => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: data,
  });
};

export const loginFailure = data => (dispatch) => {
  dispatch({
    type: LOGIN_FAILURE,
    payload: data,
  });
};

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginAction = userdata => (dispatch) => {
  dispatch(loginRequest());
  return fetch(`${baseurl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userdata),
  })
    .then(res => res.json())
    .then((data) => {
      if (data["input error"]){
        const payload = {
          message: "Please submit your email and password"
        }
        dispatch(loginFailure(payload));
      } else if (data.message === "Sorry, incorrect credentials") {
        dispatch(loginFailure(data));
      } else if (data.access_token) {
        dispatch(loginSuccess(data));
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('username', data.user);
      }
    });
};

export const logoutAction = () => (dispatch) => {
  return fetch(`${baseurl}/logout`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((data) => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      window.location='/';
    });
};
