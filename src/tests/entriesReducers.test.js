import entriesReducer from "../reducers/entriesReducers";
import * as types from "../actions/types";

const initialState = {
  entries: [],
  entry: null,
  errors: [],
  message: []
};

const get_one_success = {
  getEntry: {
    data: "Test Entry Title 2",
    date: "3/12/2018",
    entryId: 1,
    title: "This is the first entry for my tests",
    user_id: 1
  }
};

const get_all_success = {
  entries: [],
  msg: "Authorized",
  writtenToday: false
};

const create_success = {
  body: "Test Entry Title 2",
  datecreated: "3/12/2018",
  entryId: 1,
  title: "This is the first entry for my tests",
  user_id: 1
};

const update_success = {
  entry: {
    datecreated: "3/12/2018",
    entryId: 1,
    entrydata: "Test Entry Title 2",
    title: "This is the first entry for my tests",
    user_id: 1
  },
  message: "Entry edited"
};

describe("Entries reducer", () => {
  it("should return the initial state", () => {
    expect(entriesReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle GET_ENTRY", () => {
    expect(
      entriesReducer(initialState, {
        type: types.GET_ENTRY,
        payload: get_one_success
      })
    ).toEqual({
      entries: [],
      entry: get_one_success.getEntry,
      errors: [],
      message: []
    });
  });

  it("should handle GET_ENTRIES", () => {
    expect(
      entriesReducer(initialState, {
        type: types.GET_ENTRIES,
        payload: get_all_success
      })
    ).toEqual({
      entries: get_all_success.entries,
      entry: null,
      errors: [],
      message: []
    });
  });

  it("should handle CREATE_ENTRY", () => {
    expect(
      entriesReducer(initialState, {
        type: types.CREATE_ENTRY,
        payload: create_success
      })
    ).toEqual({
      entries: get_all_success.entries,
      entry: create_success,
      errors: [],
      message: []
    });
  });

  it("should handle UPDATE_ENTRY", () => {
    expect(
      entriesReducer(initialState, {
        type: types.UPDATE_ENTRY,
        payload: update_success
      })
    ).toEqual({
      entries: get_all_success.entries,
      entry: update_success.entry,
      errors: [],
      message: []
    });
  });
});
