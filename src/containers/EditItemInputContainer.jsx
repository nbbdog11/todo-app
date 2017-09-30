import React from 'react';
import PropType from 'prop-types';
import EditItemInput from '../components/EditItemInput';

class EditItemInputContainer extends React.Component {
  static propTypes = {
    defaultValue: PropType.string,
    save: PropType.func.isRequired,
  };

  static defaultProps = {
    defaultValue: '',
  };

  state = {
    value: this.props.defaultValue,
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  }

  saveChanges = (event) => {
    event.preventDefault();
    this.props.save(this.state.value);
  }

  render() {
    return (
      <EditItemInput
        defaultValue={this.props.defaultValue}
        handleInput={this.handleInput}
        saveChanges={this.saveChanges}
      />
    );
  }
}

export default EditItemInputContainer;
