import {
    GET_ENTRIES,
    GET_ENTRY,
} from './types';

const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';
const token = localStorage.getItem('token');

const actionHeaders = {
    'Authorization': `Bearer ${token}`,
    'Content-type':'application/json'
}

export const getEntries = () => (dispatch) => fetch(`${baseurl}/api/v1/entries`, {
    method: 'GET',
    headers: actionHeaders
    })
  .then(res => res.json())
  .then(data => {
    return dispatch({
    type: GET_ENTRIES,
    payload: data,
  })
});


export const getEntry = (entry_id) => (dispatch) => fetch(`${baseurl}/api/v1/entries/${entry_id}`, {
    method: 'GET',
    headers: actionHeaders
    })
  .then(res => res.json())
  .then(data => {
    return dispatch({
    type: GET_ENTRY,
    payload: data,
  })
});
