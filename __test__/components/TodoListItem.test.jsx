import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dummyFn from '../test-helpers/test-helpers';
import TodoListItem from '../../src/components/TodoListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('TodoListItem', () => {
  describe('edit button', () => {
    it('calls edit todo when not currently editing', () => {
      const id = 'someId';
      const editTodo = jest.fn();

      const subject = (
        <TodoListItem
          id={id}
          isEditing={false}
          completeTodo={dummyFn}
          deleteTodo={dummyFn}
          editTodo={editTodo}
          incompleteTodo={dummyFn}
          saveEdit={dummyFn}
          text={'todo text'}
        />
      );
      const component = shallow(subject);

      const editButton = component.find('button').first();
      editButton.simulate('click');

      expect(editTodo).toBeCalledWith(id);
    });

    it('is disabled when currently editing', () => {
      const editTodo = jest.fn();

      const subject = (
        <TodoListItem
          id={'someId'}
          isEditing
          completeTodo={dummyFn}
          deleteTodo={dummyFn}
          editTodo={editTodo}
          incompleteTodo={dummyFn}
          saveEdit={dummyFn}
          text={'todo text'}
        />
      );
      const component = shallow(subject);

      const editButton = component.find('button').first();
      editButton.simulate('click');

      expect(editButton.prop('disabled')).toEqual(true);
      expect(editTodo.mock.calls).toHaveLength(0);
    });
  });

  describe('delete button', () => {
    it('calls delete todo', () => {
      const id = 'someId';
      const deleteTodo = jest.fn();

      const subject = (
        <TodoListItem
          id={id}
          isEditing
          completeTodo={dummyFn}
          deleteTodo={deleteTodo}
          incompleteTodo={dummyFn}
          editTodo={dummyFn}
          saveEdit={dummyFn}
          text={'todo text'}
        />
      );
      const component = shallow(subject);

      const deleteButton = component.find('button').last();
      deleteButton.simulate('click');

      expect(deleteTodo).toBeCalledWith(id);
    });
  });
});
