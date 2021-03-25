// TODO: add and export your own actions

export const LOAD_CHANNELS = 'LOAD_CHANNELS';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';
export const POST_MESSAGE = 'POST_MESSAGE';
export const SET_USERNAME = 'SET_USERNAME';

export function loadChannels() {
  return {
    type: LOAD_CHANNELS,
    payload: channels
  };
}

export function loadMessages() {
  return {
    type: LOAD_MESSAGES,
    payload: messages
  };
}

export function setActiveChannel(channel) {
  return {
    type: SET_ACTIVE_CHANNEL,
    payload: channel
  };
}

export function postMessage(message) {
  return {
    type: POST_MESSAGE,
    payload: message
  };
}

export function setUsername(username = prompt("What's your username?")) {
  return {
    type: SET_USERNAME,
    payload: username
  };
}
