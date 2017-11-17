import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../common/Checkbox';

const ShowCompletedToggle = ({ showCompleted, toggleCompleted }) => (
  <span>
    <Checkbox
      checked={showCompleted}
      label="Show Completed Checkbox"
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
