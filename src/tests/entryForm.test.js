import React from "react";
import EntryFormStore, { EntryForm } from "../components/EntryForm";
import { Provider } from "react-redux";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  message: "",
  user: {},
  status: "",
  login: {}
});

let wrapper;
let change = jest.fn();
let handleChange = jest.fn();
let handleSubmit = jest.fn();
let modules = {};
let formats = {};
let titleValue = "";
let body = "";
const props = {
  change,
  handleChange,
  modules,
  formats,
  handleSubmit,
  titleValue,
  body
};

Enzyme.configure({ adapter: new Adapter() });
describe("<EntryForm />", () => {
  beforeEach(() => {
    wrapper = shallow(<EntryForm {...props} />);
    const title_input = wrapper.find("#title");
    const body_input = wrapper.find("#text-editor");
    const submit = wrapper.find("#submit");
    title_input.simulate("change");
    body_input.simulate("change");
    submit.simulate("click", { preventDefault() {} });
    expect(title_input).toHaveLength(1);
    expect(wrapper.props.handleChange).toBeCalled();
    expect(wrapper.props.change).toBeCalled();
    expect(wrapper.props.handleSubmit).toHaveBeenCalled();
    expect(wrapper.find("#text-editor")).toHaveLength(1);
  });
});
describe("it renders props correctly", () => {
  const component = shallow(<EntryFormStore {...props} />);
  it("component renders with store", () => {
    expect(component.props()).toBeDefined();
  });
});
