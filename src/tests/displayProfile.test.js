import React from "react";
import DisplayProfile from "../components/DisplayProfile";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";


const mockStore = configureMockStore([thunk]);
const store = mockStore({
  message: "",
  user: {},
  status: "",
  users: {}
});


Enzyme.configure({ adapter: new Adapter() });
describe("it renders props correctly", () => {
    const component = mount(
        <DisplayProfile
        current_entris={[]}
        last_visited=""
        joined="" />
    );
    it("component renders with store", () => {
      expect(component.instance()).toBeDefined();
    });
  });
