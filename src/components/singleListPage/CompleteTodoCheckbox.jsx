import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../common/Checkbox';

const CompleteTodoCheckbox = (props) => {
  const {
    completeTodo,
    incompleteTodo,
    isCompleted,
  } = props;
  const onChange = event => (event.target.checked ? completeTodo() : incompleteTodo());

  return (
    <Checkbox
      checked={isCompleted}
      label="Complete Todo Checkbox"
      onChange={onChange}
    />
  );
};

CompleteTodoCheckbox.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  incompleteTodo: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default CompleteTodoCheckbox;
