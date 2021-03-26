const BASE_URL = 'https://wagon-chat.herokuapp.com';

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

export function loadMessages(channel) {

   return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
   .then(response => response.json())
   .then((data) => {
     return {
       type: LOAD_MESSAGES,
       payload: data.messages
     };
   });
}

export function setActiveChannel(channel) {
  return {
    type: SET_ACTIVE_CHANNEL,
    payload: channel
  };
}

export function postMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POST_MESSAGE,
    payload: promise
  };
}

export function setUsername(username = prompt("What's your username?")) {
  return {
    type: SET_USERNAME,
    payload: username
  };
}
