import React from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = props => (
  <form onSubmit={props.handleSubmit}>
    <input
      aria-label="Add Input"
      value={props.text}
      onChange={props.handleInputChange}
    />
    <button
      aria-label="Add Button"
      onClick={props.handleSubmit}
      disabled={props.text.length < 1}
    ><i className="fa fa-plus" aria-hidden="true" /></button>
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
