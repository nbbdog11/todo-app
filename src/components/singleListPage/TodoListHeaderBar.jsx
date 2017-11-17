import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  headerStyle,
  headerSubElementStyle,
} from '../../styles/headers';

const TodoListHeaderBar = (props) => {
  const { name } = props;
  return (
    <div style={headerStyle}>
      <div style={headerSubElementStyle}>
        <Link to="/">
          <i className="fa fa-arrow-left" aria-hidden="true" />Go Back
        </Link>
      </div>
      <h2 style={headerSubElementStyle}>{name}</h2>
    </div>
  );
};

TodoListHeaderBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TodoListHeaderBar;
