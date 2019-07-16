import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import initialState from "../reducers/initialState";
import LoginForm from "../components/LoginForm";
import history from "../history";

import { Login, mapStateToProps } from "./Login";

describe("The Login Component", () => {
  describe("The container element", () => {
    it("should match the snapshot", () => {
      const tree = mapStateToProps(initialState);
      expect(tree).toMatchSnapshot();
    });

    it("should map the state to props correctly", () => {
      const sampleProps = {
        user: {
          email: "e.m@email.com",
          password: "Password"
        },
        loading: false,
        message: null,
        status: "",
        errors: null
      };

      const appState = {
        login: {
          ...sampleProps
        }
      };

      const ownProps = {
        user: {}
      };

      const componentState = mapStateToProps(appState, ownProps);
      expect(componentState).toEqual(sampleProps);
    });
  });

  const mockStore = configureStore();
  const store = mockStore(initialState.login);
  let component;
  beforeEach(() => {
    component = shallow(
      <Login store={store} {...initialState.login} />
    );
  });
  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    expect(component).toBeDefined();
  });

  it("should render children", () => {
    expect(component.find(LoginForm)).toBeDefined();
  });

  it("should call componentWillReceiveProps", () => {
    expect(component.find(LoginForm)).toBeDefined();
  });
});

describe("componentWillReceiveProps()", () => {
  it("is called after receiving props", () => {
    const nextProps = {
        status: "success"
    };
    let wrapper = shallow(<Login />);
    wrapper.instance().handleSuccess = jest.fn();
    wrapper.update();
    wrapper.setProps(nextProps);
    expect(wrapper.instance().handleSuccess).toBeCalled();
  });
});
