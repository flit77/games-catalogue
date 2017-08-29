// We import the combineReducers function
import { combineReducers } from 'redux-immutable';
// Import our reducers function from here
import games from './games';

// combineReducers merges them all!
export default combineReducers({
  games
});
