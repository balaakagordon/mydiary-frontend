import signupReducer from "./signupReducer";
import initialState from "./initialState";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/types";

const state = initialState.signup;

describe("signup reducer", () => {
  it("should return the initial state", () => {
    expect(signupReducer(state, {})).toEqual(state);
  });
  it("should handle SIGNUP_REQUEST", () => {
    const action = {
      type: SIGNUP_REQUEST
    };
    expect(signupReducer(state, action)).toEqual({
      ...state,
      status: "loading",
      loading: true
    });
  });
  it("should handle SIGNUP_SUCCESS", () => {
    const action = {
      type: SIGNUP_SUCCESS,
      payload: {
        status: "success",
        data: {
          token: "access.token.data",
          firstName: "Test",
          lastName: "User"
        }
      }
    };
    expect(signupReducer(state, action)).toEqual({
      ...state,
      loading: false,
      message: `Welcome, ${action.payload.data.firstName}`,
      status: action.payload.status,
      token: action.payload.data.token
    });
  });
  it("should handle SIGNUP_FAILURE", () => {
    const action = {
      type: SIGNUP_FAILURE,
      payload: {
        status: "failure",
        data: {
          email: ["The email has already been taken."]
        }
      }
    };
    expect(signupReducer(state, action)).toEqual({
      ...state,
      loading: false,
      errors: action.payload.data,
      status: action.payload.status
    });
  });
});
