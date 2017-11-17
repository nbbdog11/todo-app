import React from 'react';
import PropTypes from 'prop-types';

const style = {
  marginTop: '1px',
  verticalAlign: 'middle',
  width: '5%',
};

const Checkbox = ({ checked, label, onChange }) => (
  <input
    aria-label={label}
    checked={checked}
    onChange={onChange}
    style={style}
    type="checkbox"
  />
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  label: '',
  onChange: () => {},
};

export default Checkbox;
