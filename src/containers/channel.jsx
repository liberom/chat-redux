import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveChannel } from '../actions';

// Component or Container and Action

class Channel extends Component {
  render() {
    return (
      <div className='channel' >
        {this.props.channel.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveChannel: setActiveChannel }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeChannel: state.activeChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
