import {
    GET_ENTRY_REQUEST,
    GET_ENTRY_SUCCESS,
    GET_ENTRY_FAILURE
} from './types';

export const entriesRequest = () => (dispatch) => {
    dispatch({
        type: GET_ENTRY_REQUEST
    });
};

export const entriesSuccess = (data) => (dispatch) => {
    dispatch({
        type: GET_ENTRY_SUCCESS,
        payload: data,
    });
};

export const entriesFailure = (data) => (dispatch) => {
    dispatch({
        type: GET_ENTRY_FAILURE,
        payload: data,
    });
};