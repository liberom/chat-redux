import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Component or Container and Action

class MessageList extends Component {

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
