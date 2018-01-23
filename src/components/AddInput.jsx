import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';

const AddInput = (props) => {
  const {
    handleInputChange,
    handleSubmit,
    text,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="Add Input"
        value={text}
        onChange={event => handleInputChange(event.target.value)}
      />
      <Button
        label="Add Button"
        onClick={handleSubmit}
        disabled={text.length < 1}
      ><i className="fa fa-plus" aria-hidden="true" />
      </Button>
    </form>
  );
};

AddInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

AddInput.defaultProps = {
  text: '',
};

export default AddInput;
