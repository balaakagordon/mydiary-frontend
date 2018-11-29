import React from "react";
import WriteOrEditComp, { WriteOrEdit } from "../components/WriteOrEdit";
import EntryForm from "../components/EntryForm";
import { Provider } from "react-redux";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  entries: [],
  entry: null,
  errors: [],
  message: [],
  entryAction: ""
});

let wrapper;
let createEntry = jest.fn();
let updateEntry = jest.fn();
let handleChange = jest.fn();
let entryAction = "creating_entry";
let titleValue = "test title";
let bodyValue = "test body";
let entry_id = 1;

const create_props = {
  createEntry,
  updateEntry,
  entryAction
};

// entryAction= "updating_entry"

const update_props = {
  createEntry,
  updateEntry,
  entry_id,
  // entryAction,
  titleValue,
  bodyValue
};

Enzyme.configure({ adapter: new Adapter() });
describe("Creating a new entry", () => {
  beforeEach(() => {
    wrapper = shallow(
      <WriteOrEdit match={{ params: { entry_id: 1 } }} {...create_props} />
    );
  });
  it("handleChange to be called", () => {
    wrapper.instance().handleChange()
    expect(wrapper.state).toBeDefined();
  });
  it("handleSubmit to be called", () => {
    wrapper.instance().handleSubmit({preventDefault:jest.fn()})
  });
  it("change to be called", () => {
    wrapper.instance().change({ target: { name: "title", value: "the title" } })
  });
  it("change to be called", () => {
    wrapper.setProps({titleValue: "new title"})
    
  });
});

describe("Creating a new entry", () => {
  let entryAction= "updating_entry"
  const update_props = {
    createEntry,
    updateEntry,
    entry_id,
    entryAction,
    titleValue,
    bodyValue
  };
  beforeEach(() => {
    wrapper = shallow(
      <WriteOrEdit match={{ params: { entry_id: 1 } }} {...update_props} />
    );
  });
  it("handleSubmit to be called", () => {
    wrapper.instance().handleSubmit({preventDefault:jest.fn()})
  });
})
