import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleCompleted as toggleCompletedAction } from '../state/actions/actionCreators';
import ShowCompletedToggle from '../components/ShowCompletedToggle';

const ShowCompletedToggleContainer = ({ showCompleted, toggleCompleted }) => (
  <ShowCompletedToggle
    showCompleted={showCompleted}
    toggleCompleted={event => toggleCompleted(event.target.checked)}
  />
);

ShowCompletedToggleContainer.propTypes = {
  showCompleted: PropTypes.bool,
  toggleCompleted: PropTypes.func.isRequired,
};

ShowCompletedToggleContainer.defaultProps = {
  showCompleted: true,
};

const mapStateToProps = ({ showCompleted }) => ({
  showCompleted,
});

const mapDisptachToProps = dispatch => ({
  toggleCompleted: showCompleted => dispatch(toggleCompletedAction(showCompleted)),
});

export default connect(mapStateToProps, mapDisptachToProps)(ShowCompletedToggleContainer);
