import React from 'react';
import PropTypes from 'prop-types';
import { generate as generateId } from 'shortid';
import { connect } from 'react-redux';
import { addTodo } from '../state/actions/actionCreators';
import AddInput from '../components/AddInput';

class AddTodoFormContainer extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    listId: PropTypes.string.isRequired,
  }

  state = {
    text: '',
  }

  handleInputChange = (text) => {
    this.setState({
      text,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: generateId(),
      listId: this.props.listId,
      text: this.state.text,
    };
    this.props.addTodo(todo);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <AddInput
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        text={this.state.text}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodoFormContainer);
