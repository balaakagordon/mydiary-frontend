import updateEntryReducer from "./updateEntryReducer";
import initialState from "./initialState";
import {
    UPDATE_ENTRY_REQUEST,
    UPDATE_ENTRY_SUCCESS,
    UPDATE_ENTRY_FAILURE
} from "../actions/types";

const state = initialState.updateEntry;

describe("signup reducer", () => {
    it("should return the initial state", () => {
        expect(updateEntryReducer(state, {})).toEqual(state);
    });
    it("should handle UPDATE_ENTRY_REQUEST", () => {
        const action = {
            type: UPDATE_ENTRY_REQUEST
            };
            expect(updateEntryReducer(state, action)).toEqual({
            ...state,
            status: "loading",
            loading: true
        });
    });
    it("should handle UPDATE_ENTRY_SUCCESS", () => {
        const action = {
            type: UPDATE_ENTRY_SUCCESS,
            payload: {
                status: "success",
                message: "Entry updated successfully",
                data: {
                    "id": 13,
                    "title": "Title of the last one",
                    "body": "<p>I will end you, edited again</p>",
                    "author": 15,
                    "created_at": "2019-06-06 14:12:28",
                    "updated_at": "2019-07-11 17:57:53"
                }
            }
        };
        expect(updateEntryReducer(state, action)).toEqual({
            ...state,
            loading: false,
            status: action.payload.status,
            message: action.payload.message,
            data: action.payload.data
        });
    });
    it("should handle UPDATE_ENTRY_FAILURE", () => {
        const action = {
            type: UPDATE_ENTRY_FAILURE,
            payload: {
                message: "Unauthenticated"
            }
        };
        expect(updateEntryReducer(state, action)).toEqual({
            ...state,
            loading: false,
            message: `Unable to load entry`,
            errors: action.payload.data,
            status: action.payload.status,
        });
    });
});
