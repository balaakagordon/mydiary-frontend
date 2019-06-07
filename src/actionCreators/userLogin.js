import axios from 'axios';
import {
    loginRequest,
    loginSuccess,
    loginFailure
} from '../actions/loginActions';

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
        dispatch(loginSuccess(response.data));
    })
    .catch(function (error) {
        // dispatch(loginFailure(error.response.data))
    });
};

export default userLogin;
