import { LOAD_CHANNELS } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case LOAD_CHANNELS:
      return action.payload;
    default:
      return state;
  }
}
