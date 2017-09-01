import Immutable from 'immutable';
// Here the constants file comes handy
import {
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME
} from '../constants/games';

// The initial state is just an empty Map
const initialState = Immutable.Map();

// That's a very standard reducer function to return a new state given a dispatched action
export default (state = initialState, action) => {
  switch (action.type) {
    // GET_GAMES_SUCCESS case return a new state with the fetched games in the state
    case GET_GAMES_SUCCESS: {
      return state.merge({ list: action.games });
    }
    // In case of failure it simplies returned a new empty state
    case GET_GAMES_FAILURE: {
      return state.clear();
    }
    // The reducer can now set the searchBar content into the state
    case SET_SEARCH_BAR: {
      return state.merge({ searchBar: action.keyword });
    }
    // We finally moved the selectedGame in the app state
    case SHOW_SELECTED_GAME: {
      return state.merge({ selectedGame: action.game });
    }
    default:
      return state;
  }
};
