import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';
import { LOGIN_REQUEST, LOGIN_SUCCESS, AUTHENTICATED, LOGIN_FAILURE } from '../actions/types';
import userLogin from './userLogin';

describe('login action creator', () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const mock = new MockAdapter(axios);
    const mockStore = configureMockStore([thunk]);
    let store;
    const userData = {
        "email": "test.user@andela.com",
        "password": "Password"
    }

    beforeEach(() => {
        store = mockStore(initialState);
    })

    afterEach(() => {
        mock.reset();
    })

    it('should dispatch LOGIN_REQUEST, AUTHENTICATED and LOGIN_SUCCESS on successful request', () => {
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
                type: LOGIN_REQUEST
            },
            {
                type: AUTHENTICATED
            },
            {
                type: LOGIN_SUCCESS,
                payload: responseData
            }
        ];
        mock.onPost(`${baseUrl}/auth/login`).reply(200, responseData)
        return store.dispatch(userLogin(userData))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should dispatch LOGIN_REQUEST and LOGIN_FAILURE on failed request', () => {
        const responseData = {
            "status": "failure",
            "data": {
                "Authentication": [
                    "Please enter a valid email and password"
                ]
            }
        }

        const expectedActions = [
            {
                type: LOGIN_REQUEST
            },
            {
                type: LOGIN_FAILURE,
                payload: responseData
            }
        ];
        mock.onPost(`${baseUrl}/auth/login`).reply(401, responseData)
        return store.dispatch(userLogin(userData))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    })
})