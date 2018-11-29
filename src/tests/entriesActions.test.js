import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import {
  getEntries,
  getEntry,
  createEntry,
  updateEntry,
} from '../actions/entriesActions';


const baseurl = 'https://mydiary4-gbalaaka.herokuapp.com';
let store;
const mockStore = configureStore([thunk]);
let entry_id;

describe('entries actions', () => {
  beforeEach(() => {
    store = mockStore({
      entries: [],
      entry: null,
      errors: [],
      message: [],
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates GET_ENTRIES when entries are fetched', () => {

    const responseData = {
        status: 200,
        entries: [],
        msg: "Authorized",
        writtenToday: false
    }

    fetchMock.get(`${baseurl}/api/v1/entries`, responseData);

    const expectedActions = [
        {
            type: 'GET_ENTRIES',
            payload: responseData,
        }
    ];
    store.dispatch(getEntries()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_ENTRY when a user logs retrieves an entry', () => {

    const responseData = {
        status: 200,
        entry: {
          body: "Test Entry Title 2",
          datecreated: "3/12/2018",
          entry_id: 1,
          title: "This is the first entry for my tests",
          user_id: 1
      },
      message: "Entry added successfully"
    }

    entry_id = 1;

    fetchMock.get(`${baseurl}/api/v1/entries/${entry_id}`, responseData);

    const expectedActions = [
        {
            type: 'GET_ENTRY',
            payload: responseData,
        }
    ];
    store.dispatch(getEntry(entry_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  
  it('creates CREATE_ENTRY when a user submits an entry', () => {

    const responseData = {
      entry: {
          status: 201,
          body: "Test Entry Title 1",
          datecreated: "3/12/2018",
          entry_id: 1,
          title: "This is the first entry for my tests",
          user_id: 1,
      },
      message: "Entry added successfully"
    }

    const payload = {
      status: 201,
      body: "Test Entry Title 1",
      datecreated: "3/12/2018",
      entry_id: 1,
      title: "This is the first entry for my tests",
      user_id: 1,
  }

    fetchMock.post(`${baseurl}/api/v1/entries`, responseData);

    const expectedActions = [
        {
            type: 'CREATE_ENTRY',
            payload: payload,
        }
    ];
    store.dispatch(createEntry()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  
  it('creates UPDATE_ENTRY when a user submits an entry', () => {

    const responseData = {
      entry: {
          datecreated: "3/12/2018",
          entry_id: 1,
          entrydata: "Test Entry Title 2",
          title: "This is the first entry for my tests",
          user_id: 1
      },
      "message": "Entry edited"
  }

    entry_id = 1;

    fetchMock.put(`${baseurl}/api/v1/entries/${entry_id}`, responseData);

    const expectedActions = [
        {
            type: 'UPDATE_ENTRY',
            payload: responseData,
        }
    ];
    store.dispatch(updateEntry(entry_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})
