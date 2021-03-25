import { LOAD_MESSAGES } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case LOAD_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
