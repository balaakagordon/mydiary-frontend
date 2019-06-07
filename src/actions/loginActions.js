import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
} from './types';

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

export const logoutAction = () => (dispatch) => {
//   return fetch(`${baseurl}/logout`, {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   })
//     .then(res => res.json())
//     .then((data) => {
//       localStorage.removeItem('token');
//       localStorage.removeItem('username');
//       window.location='/';
//     });
};
