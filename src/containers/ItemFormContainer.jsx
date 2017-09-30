import React from 'react';
import PropTypes from 'prop-types';
import { generate as generateId } from 'shortid';
import ItemForm from '../components/ItemForm';

class ItemFormContainer extends React.Component {
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
      <ItemForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        text={this.state.text}
      />
    );
  }
}

export default ItemFormContainer;
