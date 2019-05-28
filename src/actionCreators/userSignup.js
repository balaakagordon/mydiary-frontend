import axios from 'axios';
import {
    signupRequest,
    signupSuccess,
    signupFailure
} from '../actions/signupActions';

// const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = "http://127.0.0.1:8000/api";
const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: false
  };

const userSignup = userData => (dispatch) => {
    dispatch(signupRequest());
    // var payload = JSON.stringify(userData);
    return axios.post(`${baseUrl}/auth/register`, JSON.stringify(userData), config)
    .then( function (response) {
        dispatch(signupSuccess(response.data));
    })
    .catch(function (error) {
        dispatch(signupFailure(error.response.data))
    });
};

export default userSignup;
