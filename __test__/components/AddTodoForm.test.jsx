import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTodoForm from '../../src/components/AddTodoForm';

Enzyme.configure({ adapter: new Adapter() });

const dummyFn = () => {};

describe('AddTodoForm', () => {
  describe('submit button', () => {
    it('text is "Add"', () => {
      const subject = (
        <AddTodoForm
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
          text=""
        />
      );
      const component = mount(subject);
      const submitButton = component.find('button').first();

      expect(submitButton.text()).toEqual('Add');
    });

    it('is disabled when text is empty', () => {
      const subject = (
        <AddTodoForm
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
          text=""
        />
      );
      const component = mount(subject);
      const submitButton = component.find('button').first();

      expect(submitButton.prop('disabled')).toEqual(true);
    });

    it('is enabled when text has a value', () => {
      const subject = (
        <AddTodoForm
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
          text="text prop"
        />
      );
      const component = mount(subject);
      const submitButton = component.find('button').first();

      expect(submitButton.prop('disabled')).toEqual(false);
    });
  });

  describe('submits', () => {
    const handleSubmit = jest.fn();
    const subject = (
      <AddTodoForm
        handleInputChange={dummyFn}
        handleSubmit={handleSubmit}
        text="text prop"
      />
    );
    const component = mount(subject);

    afterEach(() => {
      handleSubmit.mockReset();
    });

    it('on form submit event', () => {
      const form = component.find('form').first();
      form.simulate('submit');

      expect(handleSubmit.mock.calls).toHaveLength(1);
    });

    it('on submit button click', () => {
      const submitButton = component.find('button').first();
      submitButton.simulate('click');

      expect(handleSubmit.mock.calls).toHaveLength(1);
    });
  });

  describe('input', () => {
    it('gets value from prop', () => {
      const textPropValue = 'some text prop value';
      const subject = (
        <AddTodoForm
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
          text={textPropValue}
        />
      );
      const component = mount(subject);
      const input = component.find('input').first();

      expect(input.prop('value')).toEqual(textPropValue);
    });

    it('defaults to empty string when text prop is not passed in', () => {
      const subject = (
        <AddTodoForm
          handleInputChange={dummyFn}
          handleSubmit={dummyFn}
        />
      );
      const component = mount(subject);
      const input = component.find('input').first();

      expect(input.prop('value')).toEqual('');
    });

    it('handles changes', () => {
      const handleInputChange = jest.fn();
      const subject = (
        <AddTodoForm
          handleInputChange={handleInputChange}
          handleSubmit={dummyFn}
        />
      );
      const component = mount(subject);
      const input = component.find('input').first();
      input.simulate('change');
      input.simulate('change');
      input.simulate('change');

      expect(handleInputChange.mock.calls).toHaveLength(3);
    });
  });
});
