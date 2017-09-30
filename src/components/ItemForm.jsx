import React from 'react';
import PropTypes from 'prop-types';
import { generate as generateId } from 'shortid';

class ItemForm extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  }

  state = {
    text: '',
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: generateId(),
      text: this.state.text,
    };
    this.props.addItem(item);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          disabled={this.state.text.length < 1}
        >Add</button>
      </form>
    );
  }
}

export default ItemForm;
