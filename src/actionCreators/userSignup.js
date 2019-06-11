import axios from 'axios';
import {
    signupRequest,
    signupSuccess,
    signupFailure
} from '../actions/signupActions';
import { authenticatedNavbar } from '../actions/navbarActions';

const baseUrl = process.env.REACT_APP_API_URL;
const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: false
  };

const userSignup = userData => (dispatch) => {
    dispatch(signupRequest());
    return axios.post(`${baseUrl}/auth/register`, JSON.stringify(userData), config)
    .then( function (response) {
        if (response.data.data.token) {
            sessionStorage.setItem('token', response.data.data.token);
            sessionStorage.setItem('isLoggedIn', true);
        }
        dispatch(authenticatedNavbar());
        dispatch(signupSuccess(response.data));
    })
    .catch(function (error) {
        dispatch(signupFailure(error.response.data))
    });
};

export default userSignup;
