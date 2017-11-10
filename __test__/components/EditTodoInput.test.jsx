import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dummyFn from '../test-helpers/test-helpers';
import EditTodoInput from '../../src/components/EditTodoInput';

Enzyme.configure({ adapter: new Adapter() });

describe('EditTodoInput', () => {
  it('renders without an error', () => {
    const subject = (<EditTodoInput
      handleInput={dummyFn}
      saveChanges={dummyFn}
    />);
    const component = shallow(subject);

    expect(component.find('form')).toHaveLength(1);
  });

  describe('saves changes', () => {
    const saveChanges = jest.fn();
    const subject = (
      <EditTodoInput
        handleInput={dummyFn}
        saveChanges={saveChanges}
      />
    );
    const component = shallow(subject);

    afterEach(() => {
      saveChanges.mockReset();
    });

    it('on form submit', () => {
      const form = component.find('form').first();
      form.simulate('submit');

      expect(saveChanges.mock.calls).toHaveLength(1);
    });

    it('when input is not focused', () => {
      const input = component.find('input').first();
      input.simulate('blur');

      expect(saveChanges.mock.calls).toHaveLength(1);
    });
  });

  describe('sets default value', () => {
    it('to prop value', () => {
      const defaultValue = 'default value for input';
      const subject = (<EditTodoInput
        defaultValue={defaultValue}
        handleInput={dummyFn}
        saveChanges={dummyFn}
      />);
      const component = shallow(subject);
      const input = component.find('input').first();

      expect(input.props().defaultValue).toEqual(defaultValue);
    });

    it('to empty string when prop not passed in', () => {
      const subject = (<EditTodoInput
        handleInput={dummyFn}
        saveChanges={dummyFn}
      />);
      const component = shallow(subject);
      const input = component.find('input').first();

      expect(input.props().defaultValue).toEqual('');
    });
  });

  it('handles input in text field', () => {
    const handleInput = jest.fn();
    const subject = (<EditTodoInput
      handleInput={handleInput}
      saveChanges={dummyFn}
    />);

    const component = shallow(subject);
    const input = component.find('input');
    input.simulate('change');
    input.simulate('change');
    input.simulate('change');

    expect(handleInput.mock.calls.length).toEqual(3);
  });
});
