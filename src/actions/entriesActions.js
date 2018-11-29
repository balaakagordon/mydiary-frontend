import {
    GET_ENTRIES,
    GET_ENTRY,
    CREATE_ENTRY,
    UPDATE_ENTRY,
} from './types';
import history from '../history';

const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';
const token = localStorage.getItem('token');

const actionHeaders = {
    'Authorization': `Bearer ${token}`,
    'Content-type':'application/json',
    'Accept': 'application/json',
}

export const getEntries = () => (dispatch) => fetch(`${baseurl}/api/v1/entries`, {
    method: 'GET',
    headers: actionHeaders
    })
  .then(res => {
    // if (res.status === 401) {
    //     history.push('/');
    // }
    return res.json()
})
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

export const createEntry = (data) => (dispatch) => fetch(`${baseurl}/api/v1/entries`, {
    method: 'POST',
    headers: actionHeaders,
    body: JSON.stringify(data)
    })
    .then(res => {
        if (res.status === 401) {
            history.push('/');
        }
        return res.json()
    })
  .then(data => {
    return dispatch({
    type: CREATE_ENTRY,
    payload: data.entry,
  })
});

export const updateEntry = (entry_id, data) => (dispatch) => fetch(`${baseurl}/api/v1/entries/${entry_id}`, {
    method: 'PUT',
    headers: actionHeaders,
    body: JSON.stringify(data)
    })
  .then(res => res.json())
  .then(data => {
    return dispatch({
    type: UPDATE_ENTRY,
    payload: data,
  })
});
