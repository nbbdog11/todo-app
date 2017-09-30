import React from 'react';
import ToDoList from '../components/ToDoList';

class ToDoListContainer extends React.Component {
  state = {
    items: [],
  }

  addItem = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item],
    }));
  }

  deleteItem = (id) => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({
      items,
    });
  }

  editItem = (id, text) => {
    const items = this.state.items.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return Object.assign({}, item, {
        text,
      });
    });
    this.setState({
      items,
    });
  }

  render() {
    return (
      <ToDoList
        addItem={this.addItem}
        deleteItem={this.deleteItem}
        editItem={this.editItem}
        items={this.state.items}
      />
    );
  }
}

export default ToDoListContainer;
