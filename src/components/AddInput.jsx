import React from 'react';
import PropTypes from 'prop-types';

const AddInput = props => (
  <form onSubmit={props.handleSubmit}>
    <input
      aria-label="Add Input"
      value={props.text}
      onChange={event => props.handleInputChange(event.target.value)}
    />
    <button
      aria-label="Add Button"
      onClick={props.handleSubmit}
      disabled={props.text.length < 1}
    ><i className="fa fa-plus" aria-hidden="true" /></button>
  </form>
);

AddInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

AddInput.defaultProps = {
  text: '',
};

export default AddInput;
