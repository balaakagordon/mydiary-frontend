import loginReducer from "./loginReducer";
import initialState from "./initialState";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/types";

const state = initialState.login;

describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(state, {})).toEqual(state);
  });
  it("should handle LOGIN_REQUEST", () => {
    const action = {
      type: LOGIN_REQUEST
    };
    expect(loginReducer(state, action)).toEqual({
      ...state,
      status: "loading",
      loading: true
    });
  });
  it("should handle LOGIN_SUCCESS", () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: {
        status: "success",
        data: {
          token: "access.token.data",
          firstName: "Test",
          lastName: "User"
        }
      }
    };
    expect(loginReducer(state, action)).toEqual({
      ...state,
      loading: false,
      message: `Welcome back, ${action.payload.data.firstName}`,
      status: action.payload.status,
      token: action.payload.data.token
    });
  });
  it("should handle LOGIN_FAILURE", () => {
    const action = {
      type: LOGIN_FAILURE,
      payload: {
        status: "failure",
        data: {
          email: ["The email has already been taken."]
        }
      }
    };
    expect(loginReducer(state, action)).toEqual({
      ...state,
      loading: false,
      errors: action.payload.data,
      status: action.payload.status
    });
  });
});
