import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import games from './games';
import filestack from './filestack';
import auth from './auth';
import routing from './routing';

export default combineReducers({
  games,
  form,
  filestack,
  auth,
  routing
});
