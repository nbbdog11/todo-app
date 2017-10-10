import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'inline',
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
    onChange={event => handleChange(event, props.completeTodo, props.incompleteTodo)}
    style={style}
    type="checkbox"
  />
);

CompleteTodoCheckbox.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  incompleteTodo: PropTypes.func.isRequired,
};

export default CompleteTodoCheckbox;
