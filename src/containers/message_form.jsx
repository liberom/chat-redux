import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Component or Container and Action

class MessageForm extends Component {
  render() {
    return (
      <div className='message-form'>
        <input type="text" />
        <button>Send</button>
      </div>
    );
  }

}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     // { setCities: setCities }, dispatch
//   );
// }

// function mapStateToProps(state) {
//   return {
//     // cities: state.cities
//   };
// }

export default (MessageForm);
