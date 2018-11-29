import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import { getProfile } from '../actions/profileActions';


const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';
let store;
const mockStore = configureStore([thunk]);

describe('login actions', () => {
  beforeEach(() => {
    store = mockStore({
        user: {},
        profile: {},
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates LOGIN_REQUEST and LOGIN_SUCCESS when a user logs in successfully', () => {

    const responseData = {
        status: 200,
        userdata: {
            allEntries: 0,
            currentEntries: 0,
            deletedEntries: 0,
            lastUsed: "3/12/2018",
            notifications: true,
            registered: "3/12/2018"
        }
    }

    fetchMock.get(`${baseurl}/profile`, responseData);

    const expectedActions = [
        {
            type: 'FETCH_PROFILE',
            payload: responseData,
        }
    ];
    store.dispatch(getProfile()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})