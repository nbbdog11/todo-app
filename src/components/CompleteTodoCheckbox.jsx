import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'inline',
  marginTop: '1px',
  verticalAlign: 'middle',
  width: '3%',
};

const handleChange = (event, completeCb, incompleteCb) => {
  if (event.target.checked) {
    completeCb();
  } else {
    incompleteCb();
  }
};

const CompleteTodoCheckbox = props => (
  <input
    aria-label="Complete Todo Checkbox"
    defaultChecked={props.isCompleted}
    onChange={event => handleChange(event, props.completeTodo, props.incompleteTodo)}
    style={style}
    type="checkbox"
  />
);

CompleteTodoCheckbox.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  incompleteTodo: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default CompleteTodoCheckbox;
