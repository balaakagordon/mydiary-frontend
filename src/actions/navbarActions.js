import {
    AUTHENTICATED,
    UNAUTHENTICATED
  } from './types';

  export const authenticatedNavbar = () => (dispatch) => {
    dispatch({
      type: AUTHENTICATED,
    });
  };

  export const unAuthenticatedNavbar = data => (dispatch) => {
    dispatch({
      type: UNAUTHENTICATED,
    });
  };
