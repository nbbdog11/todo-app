import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from '../components/ToDoListItem';

class ToDoListItemContainer extends React.Component {
  static propTypes = {
    deleteItem: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    saveEdit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }

  state = {
    isEditing: false,
  }

  editItem = () => {
    this.setState({
      isEditing: true,
    });
  }

  saveEdit = (id, text) => {
    this.props.saveEdit(id, text);
    this.setState({
      isEditing: false,
    });
  }

  render() {
    return (
      <ToDoListItem
        deleteItem={this.props.deleteItem}
        editItem={this.editItem}
        id={this.props.id}
        isEditing={this.state.isEditing}
        saveEdit={this.saveEdit}
        text={this.props.text}
      />
    );
  }
}

export default ToDoListItemContainer;
