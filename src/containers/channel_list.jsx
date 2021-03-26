import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Channel from './channel';
// import { loadChannels } from '../actions';
import { selectChannel, leadMessages } from '../actions/index';

// Component or Container and Action

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeChannel !== this.props.activeChannel) {
      this.props.loadMessages(nextProps.activeChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        onClick={() => this.handleClick(channel)}
        role="presentation"
      >
        #{channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container" >
      <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>

      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, loadChannels }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    activeChannel: state.activeChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
