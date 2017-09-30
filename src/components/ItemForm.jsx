import React from 'react';
import PropTypes from 'prop-types';

const ItemForm = props => (
  <form onSubmit={props.handleSubmit}>
    <input
      value={props.text}
      onChange={props.handleInputChange}
    />
    <button
      type="submit"
      disabled={props.text.length < 1}
    >Add</button>
  </form>
);

ItemForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

ItemForm.defaultProps = {
  text: '',
};

export default ItemForm;
