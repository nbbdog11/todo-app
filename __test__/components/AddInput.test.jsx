import React from 'react';
import Enzyme, { render, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dummyFn from '../test-helpers/test-helpers';
import AddInput from '../../src/components/AddInput';

Enzyme.configure({ adapter: new Adapter() });

describe('AddInput', () => {
  describe('submit button', () => {
    it('is disabled when text is empty', () => {
      const subject = (
        <AddInput
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
          text=""
        />
      );
      const component = render(subject);
      const submitButton = component.find('button').first();

      expect(submitButton.prop('disabled')).toEqual(true);
    });

    it('is enabled when text has a value', () => {
      const subject = (
        <AddInput
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
          text="text prop"
        />
      );
      const component = render(subject);
      const submitButton = component.find('button').first();

      expect(submitButton.prop('disabled')).toEqual(false);
    });
  });

  describe('submits', () => {
    const handleSubmit = jest.fn();
    const subject = (
      <AddInput
        handleInputChange={dummyFn}
        handleSubmit={handleSubmit}
        text="text prop"
      />
    );

    afterEach(() => {
      handleSubmit.mockReset();
    });

    it('on form submit event', () => {
      const component = shallow(subject);
      const form = component.find('form').first();
      form.simulate('submit');

      expect(handleSubmit.mock.calls).toHaveLength(1);
    });

    it('on submit button click', () => {
      const component = mount(subject);
      const submitButton = component.find('button').first();
      submitButton.simulate('click');

      expect(handleSubmit.mock.calls).toHaveLength(1);
    });
  });

  describe('input', () => {
    it('gets value from prop', () => {
      const textPropValue = 'some text prop value';
      const subject = (
        <AddInput
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
          text={textPropValue}
        />
      );
      const component = shallow(subject);
      const input = component.find('input').first();

      expect(input.prop('value')).toEqual(textPropValue);
    });

    it('defaults to empty string when text prop is not passed in', () => {
      const subject = (
        <AddInput
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
        />
      );
      const component = shallow(subject);
      const input = component.find('input').first();

      expect(input.prop('value')).toEqual('');
    });

    it('handles changes', () => {
      const handleInputChange = jest.fn();
      const changeEventValue = 'new string';
      const subject = (
        <AddInput
          handleInputChange={handleInputChange}
          handleSubmit={dummyFn}
        />
      );
      const component = shallow(subject);
      const input = component.find('input').first();
      input.simulate('change', { target: { value: changeEventValue } });

      expect(handleInputChange.mock.calls).toHaveLength(1);
      expect(handleInputChange).toHaveBeenCalledWith(changeEventValue);
    });
  });
});
