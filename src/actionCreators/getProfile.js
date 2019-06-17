import axios from 'axios';
import {
    getProfileRequest,
    getProfileSuccess,
    getProfileFailure
    } from '../actions/getProfileActions';

const baseUrl = process.env.REACT_APP_API_URL;
const token = sessionStorage.getItem('token');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: false
  };

const getProfile = () => (dispatch) => {
    dispatch(getProfileRequest());
    return axios.get(`${baseUrl}/v1/user`, config)
    .then(function (response) {
        dispatch(getProfileSuccess(response.data));
    })
    .catch(function (error) {
        console.log(error);
        dispatch(getProfileFailure(error.response));
    });

}

export default getProfile;