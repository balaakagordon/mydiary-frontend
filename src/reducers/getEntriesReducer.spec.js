import getEntriesReducer from "./getEntriesReducer";
import initialState from "./initialState";
import {
    GET_ENTRIES_REQUEST,
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_FAILURE
} from "../actions/types";

const state = initialState.getEntries;


describe("signup reducer", () => {
  it("should return the initial state", () => {
    expect(getEntriesReducer(state, {})).toEqual(state);
  });
  it("should handle GET_ENTRIES_REQUEST", () => {
    const action = {
      type: GET_ENTRIES_REQUEST
    };
    expect(getEntriesReducer(state, action)).toEqual({
      ...state,
      status: "loading",
      loading: true
    });
  });
  it("should handle GET_ENTRIES_SUCCESS", () => {
      const action = {
          type: GET_ENTRIES_SUCCESS,
          payload: {
              status: "success",
              message: "3 entries found",
              data: {
                currentPage: 1,
                data: [
                    {
                        "id": 13,
                        "author": 15,
                        "title": "Title of the last one",
                        "body": "<p>I will end you</p>",
                        "created_at": "2019-06-06 14:12:28",
                        "updated_at": "2019-06-18 08:09:59"
                    },
                    {
                        "id": 15,
                        "author": 15,
                        "title": "Testing",
                        "body": "<p>one, two, three</p>",
                        "created_at": "2019-06-18 08:11:48",
                        "updated_at": "2019-06-18 08:11:48"
                    },
                    {
                        "id": 12,
                        "author": 15,
                        "title": "last entry",
                        "body": "<p>one more entry</p>",
                        "created_at": "2019-06-01 10:49:00",
                        "updated_at": "2019-06-01 10:49:00"
                    }
                ],
                total: 3,
                from: 1,
                to: 3,
                lastPage: 1,
                perPage: 10,
                firstPageUrl: "http://127.0.0.1:8000/api/v1/entries?page=1",
                lastPageUrl: "http://127.0.0.1:8000/api/v1/entries?page=1",
                prevPageUrl: null,
                nextPageUrl: null
            }
        }
    };
    expect(getEntriesReducer(state, action)).toEqual({
        ...state,
        entriesData: {
            entries: action.payload.data.data,
            total: action.payload.data.total,
            currentPage: action.payload.data.current_page,
            from: action.payload.data.from,
            to: action.payload.data.to,
            lastPage: action.payload.data.last_page,
            perPage: action.payload.data.per_page,
            firstPageUrl: action.payload.data.first_page_url,
            lastPageUrl: action.payload.data.last_page_url,
            prevPageUrl: action.payload.data.prev_page_url,
            nextPageUrl: action.payload.data.next_page_url
        },
        errors: null,
        loading: false,
        status: action.payload.status,
        message: action.payload.message
    });
  });
  it("should handle GET_ENTRIES_FAILURE", () => {
    const action = {
      type: GET_ENTRIES_FAILURE,
      payload: {
        message: "unauthenticated",
        status: null
      }
    };
    expect(getEntriesReducer(state, action)).toEqual({
      ...state,
      loading: false,
      message: `Unable to load entries`,
      errors: action.payload.data,
      status: action.payload.status
    });
  });
});
