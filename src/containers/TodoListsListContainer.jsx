import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { generate as generateId } from 'shortid';
import { addList } from '../state/actions/actionCreators';
import AddInput from '../components/AddInput';
import TodoListTable from '../components/TodoListTable';
import {
  headerStyle,
  headerSubElementStyle,
} from '../styles/headers';
import contentStyle from '../styles/content';

class TodoListsListContainer extends React.Component {
  static propTypes = {
    addList: PropTypes.func.isRequired,
    lists: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    const list = {
      id: generateId(),
      name: this.state.text,
    };
    this.props.addList(list);
    this.setState({
      text: '',
    });
  }

  render() {
    const titleStyle = Object.assign(
      {},
      headerSubElementStyle, {
        gridColumn: '2 / 3',
      },
    );
    return (
      <div>
        <div style={headerStyle}>
          <h1 style={titleStyle}>To Do Lists</h1>
        </div>
        <div style={contentStyle}>
          <AddInput
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            text={this.state.text}
          />
          <TodoListTable
            lists={this.props.lists}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ lists }) => ({
  lists: [...lists.values()],
});

const mapDispatchToProps = dispatch => ({
  addList: list => dispatch(addList(list)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoListsListContainer),
);
