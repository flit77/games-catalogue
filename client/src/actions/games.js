// We import the constants from a /constants/games
import {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME,
  DELETE_GAME,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILURE
} from '../constants/games';

// GET_GAMES function will be dispatched within GamesContainer
function getGames() {
  return {
    type: GET_GAMES
  };
}

/* After fetching form the server this action is intercepted by the reducer and the games added to the state */
function getGamesSuccess(games) {
  return {
    type: GET_GAMES_SUCCESS,
    games
  };
}

// A failure action is sent in case of server errors
function getGamesFailure() {
  return {
    type: GET_GAMES_FAILURE
  };
}

// setSearchBar action-creator has a payload, the keyword typed by the users
function setSearchBar(keyword) {
  return {
    type: SET_SEARCH_BAR,
    keyword
  };
}

// We pass the game as payload
function showSelectedGame(game) {
  return {
    type: SHOW_SELECTED_GAME,
    game
  };
}

// This is called when a user clicks on the delete button
function deleteGame() {
  return {
    type: DELETE_GAME
  };
}
// In case of succesful deletion the action is dispatched to the reducer
function deleteGamesSuccess(games) {
  return {
    type: DELETE_GAME_SUCCESS,
    games
  };
}
// In case of failure the saga dispatches DELETE_GAME_FAILURE instead
function deleteGameFailure() {
  return {
    type: DELETE_GAME_FAILURE
  };
}

// we export all the function in a single export command
export {
  getGames,
  getGamesSuccess,
  getGamesFailure,
  setSearchBar,
  showSelectedGame,
  deleteGame,
  deleteGameSuccess,
  deleteGameFailure
};
