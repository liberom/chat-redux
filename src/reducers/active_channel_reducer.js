import { SET_ACTIVE_CHANNEL } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case SET_ACTIVE_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}
