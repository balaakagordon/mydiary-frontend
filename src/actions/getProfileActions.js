import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE
} from './types';

export const getProfileRequest = () => (dispatch) => {
    dispatch({
        type: GET_PROFILE_REQUEST
    });
};

export const getProfileSuccess = (data) => (dispatch) => {
    dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: data,
    });
};

export const getProfileFailure = (data) => (dispatch) => {
    dispatch({
        type: GET_PROFILE_FAILURE,
        payload: data,
    });
};