import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userSignup from './userSignup';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, AUTHENTICATED } from '../actions/types';
import initialState from '../reducers/initialState';

describe('signup action creator', () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const mock = new MockAdapter(axios);
    const mockStore = configureMockStore([thunk]);
    let store;
    const userData = {
        "firstName": "Test",
        "lastName": "User",
        "email": "test.user@andela.com",
        "password": "Password",
        "confirmedPassword": "Password"
    };

    beforeEach(() => {
        store = mockStore(initialState);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should dispatch SIGNUP_REQUEST and SIGNUP_SUCCESS on successful fetch', () => {
        const responseData = {
            "status": "success",
            "data": {
                "token": "access.token.data",
                "firstName": "Test",
                "lastName": "User"
            }
        };

        const expectedActions = [
            {
                type: SIGNUP_REQUEST
            },
            {
                type: AUTHENTICATED,
            },
            {
                type: SIGNUP_SUCCESS,
                payload: responseData
            }
        ];
        mock.onPost(`${baseUrl}/auth/register`).reply(200, responseData)
        return store.dispatch(userSignup(userData))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    })

    it('should dispatch SIGNUP_REQUEST and SIGNUP_SUCCESS on successful fetch', () => {
        const responseData = {
            "status": "failure",
            "data": {
                "email": [
                    "The email has already been taken."
                ]
            }
        };

        const expectedActions = [
            {
                type: SIGNUP_REQUEST
            },
            {
                type: SIGNUP_FAILURE,
                payload: responseData
            }
        ];
        mock.onPost(`${baseUrl}/auth/register`)
        .reply(401, responseData)
        return store.dispatch(userSignup(userData))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    })
})