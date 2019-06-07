import React from "react";
import EntryCard from "../components/EntryCard";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EntryView from "../views/EntryView";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Registration from "../views/Registration";
import WriteEntryView from "../views/WriteEntryView";
import { UpdateEntryView } from "../views/UpdateEntryView";
import ProfileView from "../views/ProfileView";
import NavigationBar from "../components/navigation/NavigationBar";
import Pages from "../components/navigation/Pages";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  message: "",
  user: {},
  users: {},
  status: "",
  login: {},
  signup: {},
  entries: {}
});

let getEntry = jest.fn();

const props = {
  getEntry,
  profile: {
    currentEntries: [],
    registered: "",
    lastUsed: "",
    notifications: false
  }
};

Enzyme.configure({ adapter: new Adapter() });
describe("it renders props correctly", () => {
  const component = mount(<EntryCard />);
  it("component renders with store", () => {
    expect(component.instance()).toBeDefined();
  });
});

it("component renders with store", () => {
  let props = {
    match: { params: { entryId: 1 } }
  };
  let component = shallow(<EntryView {...props} />);
  expect(component.instance()).toBeDefined();
});

it("component ", () => {
  let component = shallow(<Home />);
  expect(component.exists()).toEqual(true);
});

it("component ", () => {
  let component = shallow(<NotFound />);
  expect(component.exists()).toEqual(true);
});

it("registration component", () => {
  let component = shallow(<Registration />);
  expect(component.exists()).toEqual(true);
});

it("WriteEntryView component", () => {
  let component = shallow(<WriteEntryView />);
  expect(component.exists()).toEqual(true);
});

it("Navigation Bar component", () => {
  let component = shallow(<NavigationBar loggedIn={true} />);
  expect(component.exists()).toEqual(true);
});

it("Navigation Pages component", () => {
  let component = shallow(<Pages />);
  expect(component.exists()).toEqual(true);
});
it("ProfileView component", () => {
  let component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <ProfileView {...props} />
      </MemoryRouter>
    </Provider>
  );
  expect(component.exists()).toEqual(true);
});
// it("UpdateEntryView component", () => {
//   let component = shallow(
//     <UpdateEntryView match={{ params: { entryId: 1 } }} {...props}/>
//   );
//   console.log("UpdateEntryView Props", component.instance())
//   expect(component.exists()).toEqual(true);
// });
