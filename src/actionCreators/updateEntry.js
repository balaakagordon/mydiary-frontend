// export const updateEntry = (entry_id, data) => (dispatch) => fetch(`${baseurl}/api/v1/entries/${entry_id}`, {
//     method: 'PUT',
//     headers: actionHeaders,
//     body: JSON.stringify(data)
//     })
//   .then(res => res.json())
//   .then(data => {
//     return dispatch({
//     type: UPDATE_ENTRY,
//     payload: data,
//   })
// });