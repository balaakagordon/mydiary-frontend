import {
    GET_ENTRIES
} from './types';

const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';
const token = localStorage.getItem('token');

const actionHeaders = {
    'Authorization': `Bearer ${token}`,
    'Content-type':'application/json'
}

export const getEntries = () => (dispatch) => {
    console.log("ACTION CALLED")
    return fetch(`${baseurl}/api/v1/entries`, {
    method: 'GET',
    headers: actionHeaders
    })
  .then(res => res.json())
  .then(data => {
    console.log("FETCHED ARTICLES", data)
    return dispatch({
    type: GET_ENTRIES,
    payload: data,
  })
});
}
