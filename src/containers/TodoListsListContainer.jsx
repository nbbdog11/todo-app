import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { generate as generateId } from 'shortid';
import { addList } from '../state/actions/actionCreators';
import AddInput from '../components/AddInput';

class TodoListsListContainer extends React.Component {
  static propTypes = {
    addList: PropTypes.func.isRequired,
    lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = {
    text: '',
  }

  buildListElements = lists =>
    lists.map(list => (
      <li key={list.id}>
        <Link to={`/list/${list.id}`}>
          {list.name}
        </Link>
      </li>
    ));

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
    const listElements = this.buildListElements(this.props.lists);
    return (
      <div>
        <AddInput
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          text={this.state.text}
        />
        <ul>
          {listElements}
        </ul>
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
