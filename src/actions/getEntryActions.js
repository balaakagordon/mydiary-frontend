import {
    GET_ENTRY_REQUEST,
    GET_ENTRY_SUCCESS,
    GET_ENTRY_FAILURE
} from './types';

export const getEntryRequest = () => (dispatch) => {
    dispatch({
        type: GET_ENTRY_REQUEST
    });
};

export const getEntrySuccess = (data) => (dispatch) => {
    dispatch({
        type: GET_ENTRY_SUCCESS,
        payload: data,
    });
};

export const getEntryFailure = (data) => (dispatch) => {
    dispatch({
        type: GET_ENTRY_FAILURE,
        payload: data,
    });
};