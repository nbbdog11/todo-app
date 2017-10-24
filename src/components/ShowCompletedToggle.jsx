import React from 'react';
import PropTypes from 'prop-types';

const ShowCompletedToggle = ({ showCompleted, toggleCompleted }) => (
  <span>
    <input
      aria-label="Show Completed Checkbox"
      checked={showCompleted}
      type="checkbox"
      onChange={toggleCompleted}
    />
    Show completed
  </span>
);

ShowCompletedToggle.propTypes = {
  showCompleted: PropTypes.bool,
  toggleCompleted: PropTypes.func.isRequired,
};

ShowCompletedToggle.defaultProps = {
  showCompleted: true,
};

export default ShowCompletedToggle;
