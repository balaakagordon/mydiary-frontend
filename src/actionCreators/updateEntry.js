import axios from 'axios';
import {
    updateEntryRequest,
    updateEntrySuccess,
    updateEntryFailure
} from '../actions/updateEntryActions';

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

const updateEntry = (entryId, entryData) => (dispatch) => {
    dispatch(updateEntryRequest());
    return axios.put(`${baseUrl}/v1/entries/${entryId}`, JSON.stringify(entryData), config)
    .then( function (response) {
        console.log('updated response ==> ', response.data)
        dispatch(updateEntrySuccess(response.data))
    })
    .catch( function (error) {
        console.log('error', error.response);
        dispatch(updateEntryFailure(error.response))
    });
}

export default updateEntry;