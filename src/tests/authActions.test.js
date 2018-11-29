import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import {
  loginAction,
} from '../actions/loginActions';
import {
  signupAction,
} from '../actions/signupActions';


const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';
let store;
const mockStore = configureStore([thunk]);

describe('login actions', () => {
  beforeEach(() => {
    store = mockStore({
        message: '',
        user: {},
        status: "",
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates LOGIN_REQUEST and LOGIN_SUCCESS when a user logs in successfully', () => {

    const responseData = {
        status: 200,
        access_token: "my_user_token",
        message: "Login successful",
        user: "test user"
    }

    fetchMock.post(`${baseurl}/auth/login`, responseData);

    const expectedActions = [
        {
            type: 'LOGIN_REQUEST',
        },
        {
            type: 'LOGIN_SUCCESS',
            payload: responseData,
        }
    ];
    store.dispatch(loginAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN_REQUEST and LOGIN_FAILURE when a user logs in unsuccessfully', () => {

    const responseData = {
        status: 401,
        message: "Sorry, incorrect credentials",
        user: "test user"
    }

    fetchMock.post(`${baseurl}/auth/login`, responseData);

    const expectedActions = [
        {
            type: 'LOGIN_REQUEST',
        },
        {
            type: 'LOGIN_FAILURE',
            payload: responseData,
        }
    ];
    store.dispatch(loginAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})


describe('signup actions', () => {
    beforeEach(() => {
      store = mockStore({
        message: '',
        user: {},
        status: "",
      });
    });
  
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });
  
  it('creates SIGNUP_REQUEST and SIGNUP_SUCCESS when a user signs up successfully', () => {

    const responseData = {
        status: 201,
        message: "Registered Successfully!",
        user: {
            email: "testuser@email.com",
            name: "test user"
        }
    }

    fetchMock.post(`${baseurl}/auth/signup`, responseData);

    const expectedActions = [
        {
            type: 'SIGNUP_REQUEST',
        },
        {
            type: 'SIGNUP_SUCCESS',
            payload: responseData,
        }
    ];
    store.dispatch(signupAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('creates SIGNUP_REQUEST and SIGNUP_FAILURE when a user signs up unsuccessfully', () => {

    const responseData = {
        status: 401,
        error: "This user already exists!",
        message: "User exists"
    }

    fetchMock.post(`${baseurl}/auth/signup`, responseData);

    const expectedActions = [
        {
            type: 'SIGNUP_REQUEST',
        },
    ];
    store.dispatch(signupAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})
