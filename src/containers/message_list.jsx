import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';

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
    // { setCities: setCities }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    // cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
