import React from 'react';
import PropTypes from 'prop-types';

const style = {
  margin: '0 3 0 3',
  verticalAlign: 'middle',
};

const Button = ({ children, disabled, label, onClick }) => (
  <button
    aria-label={label}
    disabled={disabled}
    onClick={onClick}
    style={style}
  >{children}</button>
);

Button.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disabled: false,
  label: '',
};

export default Button;
