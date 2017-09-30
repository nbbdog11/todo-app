import React from 'react';
import PropType from 'prop-types';

class EditItemInput extends React.Component {
  static propTypes = {
    defaultValue: PropType.string,
    handleInput: PropType.func.isRequired,
    saveChanges: PropType.func.isRequired,
  };

  static defaultProps = {
    defaultValue: '',
  };

  componentDidMount() {
    this.itemInput.focus();
  }

  render() {
    return (
      <form onSubmit={this.props.saveChanges}>
        <input
          defaultValue={this.props.defaultValue}
          onBlur={this.props.saveChanges}
          onChange={this.props.handleInput}
          ref={(input) => { this.itemInput = input; }}
          type="text"
        />
      </form>
    );
  }
}

export default EditItemInput;
