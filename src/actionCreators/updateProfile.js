import axios from 'axios';
import {
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFailure
} from '../actions/updateProfileActions';

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

const updateEntry = (userId, userData) => (dispatch) => {
    dispatch(updateProfileRequest());
    return axios.put(`${baseUrl}/v1/user/${userId}`, JSON.stringify(userData), config)
    .then( function (response) {
        dispatch(updateProfileSuccess(response.data))
    })
    .catch( function (error) {
        console.log('error', error.response);
        dispatch(updateProfileFailure(error.response))
    });
}

export default updateEntry;