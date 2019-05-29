// export const createEntry = (data) => (dispatch) => fetch(`${baseurl}/api/v1/entries`, {
//     method: 'POST',
//     headers: actionHeaders,
//     body: JSON.stringify(data)
//     })
//     .then(res => {
//         if (res.status === 401) {
//             history.push('/');
//         }
//         return res.json()
//     })
//   .then(data => {
//     return dispatch({
//     type: CREATE_ENTRY,
//     payload: data.entry,
//   })
// });