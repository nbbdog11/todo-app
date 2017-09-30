import React from 'react';
import ToDoListItem from './ToDoListItem';
import ItemForm from './ItemForm';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
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
    const buildToDoListItem = item => (
      <ToDoListItem
        deleteItem={this.deleteItem}
        id={item.id}
        key={item.id}
        text={item.text}
      />
    );
    const toDoListItems = this.state.items.map(buildToDoListItem);

    return (
      <div>
        <p>{`List size: ${this.state.items.length}`}</p>
        <ItemForm addItem={this.addItem} />
        {toDoListItems}
      </div>
    );
  }
}

export default ToDoList;
