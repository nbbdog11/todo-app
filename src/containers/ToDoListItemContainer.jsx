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
    id: PropTypes.string.isRequired,
    saveEdit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
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
      <ToDoListItem
        deleteTodo={this.props.deleteTodo}
        editTodo={this.editTodo}
        id={this.props.id}
        isEditing={this.state.isEditing}
        saveEdit={this.saveEdit}
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
  saveEdit: todo => dispatch(saveEdit(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoListItemContainer);
