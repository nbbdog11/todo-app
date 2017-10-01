import React from 'react';
import PropTypes from 'prop-types';
import { generate as generateId } from 'shortid';
import { connect } from 'react-redux';
import { addTodo } from '../state/actions/actionCreators';
import AddTodoForm from '../components/AddTodoForm';

class AddTodoFormContainer extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
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
    const todo = {
      id: generateId(),
      text: this.state.text,
    };
    this.props.addTodo(todo);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <AddTodoForm
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
