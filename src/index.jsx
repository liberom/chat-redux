// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import channelsReducer from './reducers/channels_reducer';
import messagesReducer from './reducers/messages_reducer';
import activeChannelReducer from './reducers/active_channel_reducer';
import usernameReducer from './reducers/username_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  activeChannel: activeChannelReducer,
  username: usernameReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
