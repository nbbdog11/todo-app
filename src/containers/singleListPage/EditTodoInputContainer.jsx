import React from 'react';
import PropType from 'prop-types';
import EditTodoInput from '../../components/singleListPage/EditTodoInput';

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
    this.setState({
      value: event.target.value,
    });
  }

  saveChanges = () => {
    this.props.save(this.state.value);
  }

  render() {
    return (
      <EditTodoInput
        defaultValue={this.props.defaultValue}
        handleInput={this.handleInput}
        saveChanges={this.saveChanges}
      />
    );
  }
}

export default EditItemInputContainer;
