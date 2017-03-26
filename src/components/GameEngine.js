import React from 'react';

class GameEngine extends React.Component{

    constructor(){
        super();

        this.playGameHandle = null;

        this.state = {
            gameSpeed : 500
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.runGame.bind(this)}>Play Game</button>
                <button onClick={this.stopGame.bind(this)}>Stop Game</button>
                <button onClick={this.resetGame.bind(this)}>Reset Game</button>
                <label>Game Speed</label>
                <input type="range" value={this.state.gameSpeed} min="0" max="2000" step="100"
                       onChange={ this.updateGameSpeed.bind(this)} />
                <span>{this.state.gameSpeed}ms </span>
                <span>
                    { Object.keys( this.props.players ).filter(this.isPlayerStillInGame.bind(this)).length}
                    of
                    {Object.keys( this.props.players ).length}
                    Players
                </span>
            </div>
        )
    }

    runGame(){
        if(this._running){
            console.log( 'Game already running');
            return;
        }

        this._running = true;

        let gameRunner = () => {
            const players = this.props.players;
            const remainingPlayerIds = Object.keys(players).filter(this.isPlayerStillInGame.bind(this));

            if (remainingPlayerIds.length > 1) {
                const randomPlayerId = remainingPlayerIds[Math.floor(Math.random() * remainingPlayerIds.length)];

                let randomPlayer = players[randomPlayerId];
                randomPlayer.flipped = true;

                this.props.updatePlayer(randomPlayer);

                this.playGameHandle = setTimeout(gameRunner, this.state.gameSpeed);
            } else {
                this._running = false;

                let player = players[remainingPlayerIds[0]];
                player.winner = true;
                this.props.updatePlayer(player);
            }
        };

        gameRunner();
    }

    stopGame(){
        clearTimeout( this.playGameHandle );
        this._running = false;
    }

    resetGame(){
        this.stopGame();

        Object.keys( this.props.players ).forEach( (id) => {
            this.props.players[id].reset();
            this.props.updatePlayer( this.props.players[id] );
        });
    }

    updateGameSpeed( event ){
        this.setState( {
            gameSpeed : window.parseInt(event.target.value)
        });
    }

    isPlayerStillInGame( id ){
        let player = this.props.players[id];

        return !player.flipped || player.winner;
    }
}

export default GameEngine;