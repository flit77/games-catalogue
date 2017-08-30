// Import a saga helper
import { takeLatest } from 'redux-saga';
// Saga effects are usesul to interact with the saga middleware
import { put, call } from 'redux-saga/effects';
// As predicted a saga will take care of GET_GAMES actions
import { GET_GAMES } from '../constants/games';
// either one is yielded once the fetch is done
import { getGamesSuccess, getGamesFailure } from '../actions/games';

// We moved the fetch from GamesContainer
const fetchGames = () => {
  return fetch('http://localhost:8080/games', {
    // Set the header content-type to application/json
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(response => response.json());
};

// yield call to fetchGames is in a try catch to control the flow even when the promise rejects
function* getGames() {
  try {
    const games = yield call(fetchGames);
    yield put(getGamesSuccess(games));
  } catch (err) {
    yield put(getGamesFailure());
  }
}

// The watcher saga waits for dispatched GET_GAMES actions
function* watchGetGames() {
  yield takeLatest(GET_GAMES, getGames);
}

// Export the watcher to be run in parallel in sagas/index.js
export { watchGetGames };
