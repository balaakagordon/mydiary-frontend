import {
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from './types';

export const updateProfileRequest = () => (dispatch) => {
    dispatch({
        type: UPDATE_PROFILE_REQUEST
    });
};

export const updateProfileSuccess = (data) => (dispatch) => {
    console.log(data)
    dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: data,
    });
};

export const updateProfileFailure = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_PROFILE_FAILURE,
        payload: data,
    });
};