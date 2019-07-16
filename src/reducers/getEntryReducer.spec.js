import getEntryReducer from "./getEntryReducer";
import initialState from "./initialState";
import {
    GET_ENTRY_REQUEST,
    GET_ENTRY_SUCCESS,
    GET_ENTRY_FAILURE
} from "../actions/types";

const state = initialState.getEntries;

describe("signup reducer", () => {
    it("should return the initial state", () => {
        expect(getEntryReducer(state, {})).toEqual(state);
    });
    it("should handle GET_ENTRY_REQUEST", () => {
        const action = {
            type: GET_ENTRY_REQUEST
            };
            expect(getEntryReducer(state, action)).toEqual({
            ...state,
            status: "loading",
            loading: true
        });
    });
    it("should handle GET_ENTRY_SUCCESS", () => {
        const action = {
            type: GET_ENTRY_SUCCESS,
            payload: {
                status: "success",
                message: "3 entries found",
                data: {
                    "author": 15,
                    "body": "<p>I will end you</p>",
                    "entryId": 13,
                    "title": "Title of the last one",
                    "date": "2019-06-06 14:12:28"
                }
            }
        };
        expect(getEntryReducer(state, action)).toEqual({
            ...state,
            entry: {
                id: action.payload.data.id,
                author: action.payload.data.author,
                title: action.payload.data.title,
                body: action.payload.data.body,
                lastEdited: action.payload.data.updated_at
            },
            loading: false,
            status: action.payload.status,
            message: action.payload.message
        });
    });
    it("should handle GET_ENTRY_FAILURE", () => {
        const action = {
            type: GET_ENTRY_FAILURE,
            payload: {
                message: "Unauthenticated"
            }
        };
        expect(getEntryReducer(state, action)).toEqual({
            ...state,
            loading: false,
            message: `Unable to load entry`,
            errors: action.payload.data,
            status: action.payload.status,
        });
    });
});
