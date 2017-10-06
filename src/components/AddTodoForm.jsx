import React from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = props => (
  <form onSubmit={props.handleSubmit}>
    <input
      value={props.text}
      onChange={props.handleInputChange}
    />
    <button
      onClick={props.handleSubmit}
      disabled={props.text.length < 1}
    >Add</button>
  </form>
);

AddTodoForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

AddTodoForm.defaultProps = {
  text: '',
};

export default AddTodoForm;
