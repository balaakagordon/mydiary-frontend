import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('The Button component', () => {
    let component

    beforeAll(() => {
        component = mount(<Button />)
    })

    it('should render without crashing', () => {
        expect(component).toBeDefined();
    })

    it('should match the snapshot', () => {
        expect(component).toMatchSnapshot();
    })
})

describe('Button component functions', () => {
    const buttonAction = jest.fn();

    it('should call action when clicked', () => {
        let wrapper = mount(
            <Button
                action={buttonAction}
                title={'Submit'}
                className={'class'}
            />
        );
        wrapper.find('button').simulate('click');
        expect(buttonAction).toHaveBeenCalled();
    })
})
