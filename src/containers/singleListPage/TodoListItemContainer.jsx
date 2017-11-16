import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  completeTodo,
  deleteTodo,
  incompleteTodo,
  saveEdit,
} from '../../state/actions/actionCreators';
import TodoListItem from '../../components/singleListPage/TodoListItem';

class TodoListItemContainer extends React.Component {
  static propTypes = {
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    incompleteTodo: PropTypes.func.isRequired,
    isComplete: PropTypes.bool,
    saveEdit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }

  static defaultProps = {
    isComplete: false,
  }

  state = {
    isEditing: false,
  }

  editTodo = () => {
    this.setState({
      isEditing: true,
    });
  }

  saveEdit = (todo) => {
    this.props.saveEdit(todo);
    this.setState({
      isEditing: false,
    });
  }

  render() {
    return (
      <TodoListItem
        completeTodo={this.props.completeTodo}
        deleteTodo={this.props.deleteTodo}
        editTodo={this.editTodo}
        id={this.props.id}
        incompleteTodo={this.props.incompleteTodo}
        isComplete={this.props.isComplete}
        isEditing={this.state.isEditing}
        saveEdit={this.saveEdit}
        text={this.props.text}
      />
    );
  }
}

const isComplete = (state, id) => {
  const thisTodo = state.todos.find(todo => todo.id === id);
  return thisTodo ? thisTodo.completed : false;
};

const mapStateToProps = (state, ownProps) => ({
  isComplete: isComplete(state, ownProps.id),
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(completeTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  incompleteTodo: id => dispatch(incompleteTodo(id)),
  saveEdit: todo => dispatch(saveEdit(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListItemContainer);
