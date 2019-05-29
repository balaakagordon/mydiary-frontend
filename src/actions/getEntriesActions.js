import {
    GET_ENTRIES_REQUEST,
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_FAILURE
} from './types';

export const entriesRequest = () => (dispatch) => {
    dispatch({
        type: GET_ENTRIES_REQUEST
    });
};

export const entriesSuccess = (data) => (dispatch) => {
    dispatch({
        type: GET_ENTRIES_SUCCESS,
        payload: data,
    });
};

export const entriesFailure = (data) => (dispatch) => {
    dispatch({
        type: GET_ENTRIES_FAILURE,
        payload: data,
    });
};