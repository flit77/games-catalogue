// We import the combineReducers function
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
// Import our reducers function from here
import games from './games';
import filestack from './filestack';

// combineReducers merges them all!
export default combineReducers({
  games,
  form,
  filestack
});
