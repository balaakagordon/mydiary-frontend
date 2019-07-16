import React from 'react';
import { mount } from 'enzyme';
import FormInputField from './FormInputField';

describe('The FormInputField component', () => {
    let component;

    beforeAll(() => {
        component = mount(<FormInputField />)
    })

    it('should render without crashing', () => {
        expect(component).toBeDefined();
    })

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    })
})

describe('FormInputField functions', () => {
    let handleChange = jest.fn();

    it('should call handleChange onChange', () => {
        let wrapper = mount(
            <FormInputField
                title={'title'}
                name={'name'}
                value={''}
                handleChange={handleChange}
            />
        )
        wrapper.find('input').simulate('change');
        expect(handleChange).toHaveBeenCalled();
    })
})
