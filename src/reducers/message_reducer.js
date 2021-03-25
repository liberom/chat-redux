import { POST_MESSAGE } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case POST_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
