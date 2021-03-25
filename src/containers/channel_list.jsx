import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Channel from './channel';

// Component or Container and Action

class ChannelList extends Component {
  render() {
    return (
      <div className="channels" >
        {this.props.channels.map((channel) => {
          return <Channel key={channel.name} channel={channel} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
