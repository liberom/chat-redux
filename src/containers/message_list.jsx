import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MessageForm from '../containers/message_form';
import Message from './message';
import { loadMessages } from '../actions';

// Component or Container and Action



class MessageList extends Component {
  componentWillMount(){
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.loadMessages(this.props.activeChannel);
  }

  render() {
    return (
      <div className='channel-container'>
        <div className='channel-title'>
          <span>Channel #{this.props.activeChannel}</span>
        </div>
        <div className='channel-content' ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message) => {
            return <Message key={message.content} message={message} />;
          })}
        </div>
        <MessageForm />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadMessages }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    activeChannel: state.activeChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
