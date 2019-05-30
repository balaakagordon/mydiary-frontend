import {
    CREATE_ENTRY_REQUEST,
    CREATE_ENTRY_SUCCESS,
    CREATE_ENTRY_FAILURE
} from './types';

export const createEntryRequest = () => (dispatch) => {
    dispatch({
        type: CREATE_ENTRY_REQUEST
    });
};

export const createEntrySuccess = (data) => (dispatch) => {
    console.log(data)
    dispatch({
        type: CREATE_ENTRY_SUCCESS,
        payload: data,
    });
};

export const createEntryFailure = (data) => (dispatch) => {
    dispatch({
        type: CREATE_ENTRY_FAILURE,
        payload: data,
    });
};