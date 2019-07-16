import axios from 'axios';
import {
    loginRequest,
    loginSuccess,
    loginFailure
} from '../actions/loginActions';
import { authenticatedNavbar } from '../actions/navbarActions';

const baseUrl = process.env.REACT_APP_API_URL;
const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: false
  };

const userLogin = userData => (dispatch) => {
    dispatch(loginRequest());
    return axios.post(`${baseUrl}/auth/login`, JSON.stringify(userData), config)
    .then( function (response) {
        if (response.data.data.token) {
            sessionStorage.setItem('token', response.data.data.token);
            sessionStorage.setItem('isLoggedIn', true);
        }
        dispatch(authenticatedNavbar());
        dispatch(loginSuccess(response.data));
    })
    .catch(function (error) {
        if (error.response.data) {
            dispatch(loginFailure(error.response.data))
        }
    });
};

export default userLogin;
