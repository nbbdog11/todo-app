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

  render() {
    return (
      <ToDoList
        addItem={this.addItem}
        deleteItem={this.deleteItem}
        items={this.state.items}
      />
    );
  }
}

export default ToDoListContainer;
