import userReducers from '../reducers/userReducers';

import * as types from '../actions/types';

const initialState = {
    user: {},
    profile: {},
};

const fetch_success = {
    userdata: {
        allEntries: 0,
        currentEntries: 0,
        deletedEntries: 0,
        lastUsed: "3/12/2018",
        notifications: true,
        registered: "3/12/2018"
    }
};


describe('Entries reducer', () => {
  it('should return the initial state', () => {
    expect(userReducers(initialState, {})).toEqual(initialState);
  });

  it('should handle FETCH_PROFILE', () => {
    expect(userReducers(initialState, {
      type: types.FETCH_PROFILE,
      payload: fetch_success,
    })).toEqual(
      {
        profile: fetch_success.userdata,
        user: {}
      },
    );
  });
})