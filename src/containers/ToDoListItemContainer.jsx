import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  saveEdit,
} from '../state/actions/actionCreators';
import ToDoListItem from '../components/ToDoListItem';

class ToDoListItemContainer extends React.Component {
  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isEditing: PropTypes.bool,
    saveEdit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }

  static defaultProps = {
    isEditing: false,
  }

  render() {
    return (
      <ToDoListItem
        deleteTodo={this.props.deleteTodo}
        editTodo={this.props.editTodo}
        id={this.props.id}
        isEditing={this.props.isEditing}
        saveEdit={this.props.saveEdit}
        text={this.props.text}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isEditing: state.activeEdits.some(edit => edit === ownProps.id),
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: id => dispatch(editTodo(id)),
  saveEdit: todo => dispatch(saveEdit(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoListItemContainer);
