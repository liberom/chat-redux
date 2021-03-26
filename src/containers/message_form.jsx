import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Component or Container and Action
import { postMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postMessage(this.props.activeChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return (
      <form className="channel-editor" onSubmit={this.handleSubmit}>
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>

    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { postMessage }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeChannel: state.activeChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
