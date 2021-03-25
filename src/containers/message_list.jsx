import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from './message';
import { loadMessages } from '../actions';

// Component or Container and Action

class MessageList extends Component {
  render() {
    return (
      <div className='messages' >
        {this.props.messages.map((message) => {
          return <Message key={message.text} message={message} />
        })}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadMessages: loadMessages }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
