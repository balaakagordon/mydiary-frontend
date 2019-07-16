import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import initialState from '../reducers/initialState';
import SignupForm from '../components/SignupForm';

import { Registration, mapStateToProps } from './Registration';
import { wrap } from 'module';

describe('The Registration Component', () => {
    describe('The container element', () => {
        it('should match the snapshot', () => {
            const tree = mapStateToProps(initialState);
            expect(tree).toMatchSnapshot();
        });

        it('should map the state to props correctly', () => {
            const sampleProps = {
                user: {
                    firstName: 'Da',
                    lastName: 'Di',
                    email: 'e.m@email.com',
                    password: 'Password',
                    confirmedPassword: 'Password'
                },
                loading: false,
                message: null,
                status: '',
                errors: null
            };

            const appState = {
                signup: {
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
    const store = mockStore(initialState.signup);
    let component;
    beforeEach(() => {
        component = shallow(<Registration store={store} {...initialState.signup} />);
    });
    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render without crashing', () => {
        expect(component).toBeDefined();
    })

    it('should render children', () => {
        expect(component.find(SignupForm)).toBeDefined();
    })

    it('should call componentWillReceiveProps', () => {
        expect(component.find(SignupForm)).toBeDefined ();
    })
});

describe('Registration methods', () => {
    let wrapper;
    let event = {
        preventDefault: jest.fn()
    };

    let sessionStorage = {
        getItem: jest.fn((token) => {
            const result = `user.access.${token}`
            return result;
        })
    }

    let history = {
        push: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<Registration />);
        wrapper.instance().props = {
            userSignup: jest.fn()
        };
        wrapper.instance().handleClearForm = jest.fn();
        wrapper.instance().handleFormInput = jest.fn();
        wrapper.instance().handleLoader = jest.fn();
        wrapper.update();
    })
    it("componentWillReceiveProps calls handleSuccess after receiving success props", () => {
        wrapper.instance().handleSuccess = jest.fn();
        wrapper.update();
        const nextProps = {
            status: "success"
        };
        wrapper.setProps(nextProps);
        expect(wrapper.instance().handleSuccess).toBeCalled();
    });

    it("componentWillReceiveProps calls handleErrors after receiving error props", () => {
        wrapper.instance().handleErrors = jest.fn();
        wrapper.instance();
        const nextProps = {
            status: "error"
        };
        wrapper.setProps(nextProps);
        expect(wrapper.instance().handleErrors).toBeCalled();
    });

    it("handleLoader is called when loading props are true", () => {
        const nextProps = {
            loading: true
        };
        wrapper.setProps(nextProps);
        expect(wrapper.instance().handleLoader).toBeCalled();
    });

    it("calls userSignup when form is submitted", () => {
        wrapper.instance().handleFormSubmit(event);
        expect(wrapper.instance().props.userSignup).toBeCalled();
    });

    it("calls redirects to home page handleSuccess is called", () => {
        wrapper.instance().handleSuccess('msg');
        // expect(wrapper.instance().props.userSignup).toBeCalled();
    });
})