import React from 'react';
import OpenGame from './OpenGame';

class GameEngine extends React.Component{

    constructor(){
        super();

        this.playGameHandle = null;

        this.state = {
            gameSpeed : 500
        };

        this.runGame = this.runGame.bind(this);
        this.stopGame= this.stopGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.gameRunner = this.gameRunner.bind(this);
        this.updateGameSpeed = this.updateGameSpeed.bind(this);
    }

    render(){
        return (
            <div>
                <button onClick={this.runGame}>Play Game</button>
                <button onClick={this.stopGame}>Stop Game</button>
                <button onClick={this.resetGame}>Reset Game</button>
                <label>Game Speed</label>
                <input type="range" value={this.state.gameSpeed} min="0" max="2000" step="100"
                       onChange={ this.updateGameSpeed} />
                <span>{this.state.gameSpeed}ms </span>
                <span>
                    {this.props.players.filter((player)=> !player.flipped || player.winner).length}
                    of
                    {this.props.players.length}
                    Players
                </span>
                <OpenGame />
            </div>
        )
    }

    runGame(){
        if(this._running){
            console.log( 'Game already running');
            return;
        }

        this._running = true;

        this.gameRunner();
    }

    gameRunner(){
        const players = this.props.players;
        const remainingPlayers = players.filter((player)=> !player.flipped || player.winner);

        if (remainingPlayers.length > 1) {
            const randomPlayer = remainingPlayers[Math.floor(Math.random() * remainingPlayers.length)];
            randomPlayer.flipped = true;

            this.props.updatePlayer(randomPlayer);

            this.playGameHandle = setTimeout(this.gameRunner, this.state.gameSpeed);
        } else {
            this._running = false;

            remainingPlayers[0].winner = true;
            this.props.updatePlayer(remainingPlayers[0]);
        }
    }

    stopGame(){
        clearTimeout( this.playGameHandle );
        this._running = false;
    }

    resetGame(){
        this.stopGame();

        this.props.players.forEach( (player) => {
            player.reset();
            this.props.updatePlayer( player );
        });
    }

    updateGameSpeed( event ){
        this.setState( {
            gameSpeed : window.parseInt(event.target.value)
        });
    }
}

GameEngine.propTypes = {
    players : React.PropTypes.array.isRequired,
    updatePlayer : React.PropTypes.func.isRequired
};

export default GameEngine;