import axios from 'axios';
import {
    createEntryRequest,
    createEntrySuccess,
    createEntryFailure
} from '../actions/createEntryActions';

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


const createEntry = entryData => (dispatch) => {
    dispatch(createEntryRequest());
    return axios.post(`${baseUrl}/v1/entries`, JSON.stringify(entryData), config)
    .then (function (response) {
        console.log('response', response.data);
        dispatch(createEntrySuccess(response.data));
    })
    .catch( function (error) {
        console.log('error', error.response);
        dispatch(createEntryFailure(error.response))
    });
};

export default createEntry;