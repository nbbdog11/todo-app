import React from 'react';
import PropType from 'prop-types';
import formStyle from '../../styles/form';

class EditTodoInput extends React.Component {
  static propTypes = {
    defaultValue: PropType.string,
    handleInput: PropType.func.isRequired,
    saveChanges: PropType.func.isRequired,
  };

  static defaultProps = {
    defaultValue: '',
  };

  componentDidMount() {
    if (this.todoInput) {
      this.todoInput.focus();
    }
  }

  render() {
    const inputStyle = {
      width: '80%',
    };

    return (
      <form
        onSubmit={this.props.saveChanges}
        style={formStyle}
      >
        <input
          aria-label="Edit Input"
          defaultValue={this.props.defaultValue}
          onBlur={this.props.saveChanges}
          onChange={this.props.handleInput}
          ref={(input) => { this.todoInput = input; }}
          style={inputStyle}
          type="text"
        />
      </form>
    );
  }
}

export default EditTodoInput;
