import axios from 'axios';
import {
    entriesRequest,
    entriesSuccess,
    entriesFailure
} from '../actions/getEntriesActions';

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


const getAllEntries = () => (dispatch) => {
    dispatch(entriesRequest());
    return axios.get(`${baseUrl}/v1/entries`, config)
    .then(function (response) {
        dispatch(entriesSuccess(response.data));
    })
    .catch(function (error) {
        dispatch(entriesFailure(error.response.data))
    });
};

export default getAllEntries;