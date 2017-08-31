import React, { Component } from 'react';
 // We import connect from react-redux
import { connect } from 'react-redux';
// bindActionCreators comes handy to wrap action creators in dispatch calls
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { Modal, GamesListManager } from '../components';
// we import the action-creators to be binde with bindActionCreators
import * as gamesActionCreators from '../actions/games';

// We do not export GamesContainer as it is 'almost' a dumb component
class GamesContainer extends Component {
  constructor (props) {
    super();
    // For now we still initialize the state
    this.state = { selectedGame: {}, searchBar: '' };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount () {
    this.getGames();
  }

  toggleModal (index) {
    this.setState({ selectedGame: this.state.games[index] });
    $('#game-modal').modal();
  }
  
  // GET_GAMES is now dispatched and intercepted by the saga watcher 
  getGames () {
    this.props.gamesActions.getGames();
  }

  deleteGame (id) {
    fetch(`http://localhost:8080/games/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ games: this.state.games.filter(game => game._id !== id) });
      console.log(response.message);
    });
  }

  setSearchBar (event) {
    this.props.gamesActions.setSearchBar(event.target.value.toLowerCase());
  }

  render () {
    const { selectedGame } = this.state;
    const { games, searchBar } = this.props;
    console.log(games);
    return (
      <div>
        <Modal game={selectedGame} />
        <GamesListManager
          games={games}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteGame={this.deleteGame}
        />
      </div>
    );
  }
}

// We can read values from the state thanks to mapStateToProps
function mapStateToProps (state) {
  return { // We get all the games to list in the page
    games: state.getIn(['games', 'list'], Immutable.List()).toJS(),
    searchBar: state.getIn(['games', 'searchBar'], '') // We retrieve the searchBar content too
  }
}
// We can dispatch actions to the reducer and sagas
function mapDispatchToProps (dispatch) {
  return {
    gamesActions: bindActionCreators(gamesActionCreators, dispatch)
  };
}
// Finally we export the connected GamesContainer
export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
