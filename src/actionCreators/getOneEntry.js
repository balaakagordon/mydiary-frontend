

// export const getEntry = (entry_id) => (dispatch) => fetch(`${baseurl}/api/v1/entries/${entry_id}`, {
//     method: 'GET',
//     headers: actionHeaders
//     })
//   .then(res => res.json())
//   .then(data => {
//     return dispatch({
//     type: GET_ENTRY,
//     payload: data,
//   })
// });