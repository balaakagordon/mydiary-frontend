import loginReducer from '../reducers/loginReducers';
import signupReducer from '../reducers/signupReducers';
import * as types from '../actions/types';

const initialState = {
  message: '',
  user: {},
  status: '',
};

const login_success = {
  access_token: "my_user_token",
  message: "Login successful",
  user: "test user"
};

const login_failure = {
  message: "Sorry, incorrect credentials",
  user: "test user"
};

const signup_success = {
  message: "Registered Successfully!",
  user: {
      email: "testuser@email.com",
      name: "test user"
  }
};

const signup_failure = {
  error: "This user already exists!",
  message: "User exists"
};


describe('Login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(loginReducer(initialState, {
      type: types.LOGIN_REQUEST,
      payload: login_success,
    })).toEqual(
      {
        message: "",
        status: 'loading',
        user: {},
      },
    );
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(loginReducer(initialState, {
      type: types.LOGIN_SUCCESS,
      payload: login_success,
    })).toEqual(
      {
        message: login_success.message,
        status: 'success',
        user: {},
      },
    );
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(loginReducer(initialState, {
      type: types.LOGIN_FAILURE,
      payload: login_failure,
    })).toEqual(
      {
        message: login_failure.message,
        status: 'error',
        user: {},
      },
    );
  });
});


describe('Signup reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle SIGNUP_REQUEST', () => {
    expect(signupReducer(initialState, {
      type: types.SIGNUP_REQUEST,
      payload: signup_success,
    })).toEqual(
      {
        message: "",
        status: 'loading',
        user: {},
      },
    );
  });

  it('should handle SIGNUP_SUCCESS', () => {
    expect(signupReducer(initialState, {
      type: types.SIGNUP_SUCCESS,
      payload: signup_success,
    })).toEqual(
      {
        message: signup_success,
        status: 'success',
        user: {},
      },
    );
  });

  it('should handle SIGNUP_FAILURE', () => {
    expect(signupReducer(initialState, {
      type: types.SIGNUP_FAILURE,
      payload: signup_failure,
    })).toEqual(
      {
        message: signup_failure.error,
        status: 'error',
        user: {},
      },
    );
  });
});
