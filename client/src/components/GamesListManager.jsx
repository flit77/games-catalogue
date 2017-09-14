import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Game from './Game';
import AddGamePanel from './AddGamePanel';

export default class GamesListManager extends PureComponent {
  render () {
    const { games, searchBar, setSearchBar, toggleModal, deleteGame, logout } = this.props;
    return (

      <div className="container scrollable">
        <div className="row text-left">
          <AddGamePanel logout={logout} userName={userName}/>
        </div>
        <div className="row">
          <input
            type="search" placeholder="Search by Name" className="form-control search-bar" onKeyUp={setSearchBar} />
        </div>
        <div className="row">
        {
          // A Game is only shown if its name contains the string from the searchBar
          games
            .filter(game => game.name.toLowerCase().includes(searchBar))
            .map((game, i) => {
              return (
                <Game  {...game}
                  key={game._id}
                  i={i}
                  toggleModal={toggleModal}
                  deleteGame={deleteGame}
                />
              );
            })
        }
        </div>
        <hr />
      </div>
    );
  }
}
