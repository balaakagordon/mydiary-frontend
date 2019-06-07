import {
    UPDATE_ENTRY_REQUEST,
    UPDATE_ENTRY_SUCCESS,
    UPDATE_ENTRY_FAILURE
} from './types';

export const updateEntryRequest = () => (dispatch) => {
    dispatch({
        type: UPDATE_ENTRY_REQUEST
    });
};

export const updateEntrySuccess = (data) => (dispatch) => {
    console.log(data)
    dispatch({
        type: UPDATE_ENTRY_SUCCESS,
        payload: data,
    });
};

export const updateEntryFailure = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_ENTRY_FAILURE,
        payload: data,
    });
};