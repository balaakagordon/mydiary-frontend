import React from "react";
import LoginFormStore, { LoginForm } from "../components/LoginForm";
import SignupFormStore, { SignupForm } from "../components/SignupForm";
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
  login: {},
  signup: {}
});

let wrapper;
let loginAction = jest.fn();
let signupAction = jest.fn();

const props = {
  window: { location: "/home" },
  loginAction,
  signupAction,
  message: "naem"
};

Enzyme.configure({ adapter: new Adapter() });
describe("<LoginForm />", () => {
  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props}/>);
  });
  it("check next props", () => {
    wrapper.setProps({ status: "loading" });
    expect(wrapper).toHaveLength(1);
  });
  it("check next props for success", () => {
    wrapper.setProps({ status: "success" });
    expect(wrapper.instance()).toBeDefined();
  });
  it("check next props for error", () => {
    wrapper.setProps({ status: "error" });
    expect(wrapper).toHaveLength(1);
  });
  it("check next props for error", () => {
    wrapper.setProps({ status: "errorert" });
    expect(wrapper.instance()).toBeDefined();
  });
  it("check next props for error else", () => {
    wrapper.setProps({});
    expect(wrapper.instance()).toBeDefined();
  });
  it("check that state is updated onchange", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "password", value: "122345676543" } });
    expect(wrapper.state()).toEqual({
      password: "122345676543",
      status: "none",
      user: { email: "", password: "" }
    });
  });
  it("check that loginAction is called on submission", () => {
    wrapper.instance().handleSubmit({preventDefault:jest.fn()});
    expect(loginAction).toBeCalled()
  });
});
describe("it renders props correctly", () => {
  const component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginFormStore />
      </MemoryRouter>
    </Provider>
  );
  it("component renders with store", () => {
    expect(component.instance()).toBeDefined();
  });
});

describe("<SignupForm />", () => {
  beforeEach(() => {
    wrapper = shallow(<SignupForm {...props}/>);
  });
  it("check next props", () => {
    wrapper.setProps({ status: "loading" });
    expect(wrapper).toHaveLength(1);
  });
  it("check next props for success", () => {
    wrapper.setProps({ status: "success" });
    expect(wrapper.instance()).toBeDefined();
  });
  it("check next props for error", () => {
    wrapper.setProps({ status: "error" });
    expect(wrapper).toHaveLength(1);
  });
  it("check next props for error", () => {
    wrapper.setProps({ status: "errorert" });
    expect(wrapper.instance()).toBeDefined();
  });
  it("check next props for error else", () => {
    wrapper.setProps({});
    expect(wrapper.instance()).toBeDefined();
  });
  it("check that state is updated onchange", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "password", value: "122345676543" } });
    expect(wrapper.state()).toEqual({
      password: "122345676543",
      status: "none",
      user: {
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
      }
    });
  });
  it("check that signupAction is called on submission", () => {
    wrapper.instance().handleSubmit({preventDefault:jest.fn()});
    expect(signupAction).toBeCalled()
  });
});
describe("it renders props correctly", () => {
  const component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <SignupFormStore />
      </MemoryRouter>
    </Provider>
  );
  it("component renders with store", () => {
    expect(component.instance()).toBeDefined();
  });
});
