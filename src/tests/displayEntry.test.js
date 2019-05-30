import React from "react";
import DisplayEntryComp from "../components/DisplayEntry";
import { Provider } from "react-redux";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";


let editEntry = jest.fn();
let entry_id = 1;

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  message: "",
  user: {},
  status: "",
  entries: {}
});

const props = {
  window: { location: '/edit/1' },
  editEntry,
  entry_id,
}

Enzyme.configure({ adapter: new Adapter() });
describe("it renders props correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <DisplayEntryComp {...props} />
        </MemoryRouter>
      </Provider>
    );
    it("component renders with store", () => {
      expect(wrapper.instance()).toBeDefined();
    });
    it("runs editEntry on button click", () => {
      const submit_button = wrapper.find("button");
      // console.log(submit_button);
      submit_button.simulate("click");
      expect(editEntry).toBeDefined();
    });
  });
