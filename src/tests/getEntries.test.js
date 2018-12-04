import React from "react";
import { Provider } from "react-redux";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

import GetEntry from "../components/GetEntry";
import Entries, { GetEntries } from "../components/GetEntries";
// import { wrap } from 'module';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  message: "",
  user: {},
  status: "",
  entries: {}
});

let getEntries = jest.fn();
let wrapper;
// let shallow_wrapper;

const props = {
  entries: [],
  entry: {},
  getEntries
};

const data_props = {
  entries: [
    { title: "titledata", body: "bodydata" },
    { title: "titledata", body: "bodydata" }
  ],
  entry: {},
  getEntries
};

const no_entry_props = {
  //   entry: {},
  getEntries
};

Enzyme.configure({ adapter: new Adapter() });

describe("mount <GetEntries />", () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Entries {...data_props} />
      </Provider>
    );
  });
  it("should be rendered", () => {
    expect(wrapper.instance()).toBeDefined();
  });

});
it("should be rendered with props", () => {
  let wrapper = shallow(<GetEntries {...props} />);
  expect(wrapper.instance()).toBeDefined();
});
it("should be rendered without props", () => {
  let wrapper = shallow(<GetEntries {...no_entry_props} />);
  expect(wrapper.instance()).toBeDefined();
});

describe("mount <GetEntry />", () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <GetEntry {...props} />
      </Provider>
    );
  });
  it("should be rendered", () => {
    expect(wrapper.instance()).toBeDefined();
  });
});

describe("mount <GetEntry /> with props", () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <GetEntry {...data_props} />
      </Provider>
    );
  });
  it("should be rendered", () => {
    expect(wrapper.instance()).toBeDefined();
  });
});
