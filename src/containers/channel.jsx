import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Component or Container and Action

class Channel extends Component {
  render() {
    return (
      <div className='channel' >
        {this.props.channel.name}
      </div>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
