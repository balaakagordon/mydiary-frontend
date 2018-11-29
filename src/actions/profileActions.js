import {
FETCH_PROFILE
} from './types';
    
const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';
const token = localStorage.getItem('token');

const actionHeaders = {
    'Authorization': `Bearer ${token}`,
    'Content-type':'application/json',
    'Accept': 'application/json',
}

export const getProfile = () => (dispatch) => fetch(`${baseurl}/profile`, {
    method: 'GET',
    headers: actionHeaders
    })
    .then(res => {
    //   console.log("PROFILE RESPONSE ==> ", res)
    // if (res.status === 401) {
    //     history.push('/');
    // }
    return res.json()
})
    .then(data => {
    return dispatch({
    type: FETCH_PROFILE,
    payload: data,
    })
});