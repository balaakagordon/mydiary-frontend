import axios from 'axios';
import {
    getEntryRequest,
    getEntrySuccess,
    getEntryFailure
} from '../actions/getEntryActions';

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

const getOneEntry = entryId => (dispatch) => {
    dispatch(getEntryRequest());
    return axios.get(`${baseUrl}/v1/entries/${entryId}`, config)
    .then( function (response) {
        console.log(response.data)
        dispatch(getEntrySuccess(response.data))
    })
    .catch( function (error) {
        console.log(error.response)
        dispatch(getEntryFailure(error.response))
    });
};

export default getOneEntry;