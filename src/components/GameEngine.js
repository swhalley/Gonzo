import React from 'react';

class GameEngine extends React.Component{

    constructor(){
        super();

        this.playGameHandle = null;

        this.state = {
            gameSpeed : 500
        }

        this.runGame = this.runGame.bind(this);
        this.stopGame= this.stopGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.gameRunner = this.gameRunner.bind(this);
        this.isPlayerStillInGame = this.isPlayerStillInGame.bind(this);
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
                    { Object.keys( this.props.players ).filter(this.isPlayerStillInGame).length}
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

        this.gameRunner();
    }

    gameRunner(){
        const players = this.props.players;
        const remainingPlayerIds = Object.keys(players).filter(this.isPlayerStillInGame);

        if (remainingPlayerIds.length > 1) {
            const randomPlayerId = remainingPlayerIds[Math.floor(Math.random() * remainingPlayerIds.length)];

            let randomPlayer = players[randomPlayerId];
            randomPlayer.flipped = true;

            this.props.updatePlayer(randomPlayer);

            this.playGameHandle = setTimeout(this.gameRunner, this.state.gameSpeed);
        } else {
            this._running = false;

            let player = players[remainingPlayerIds[0]];
            player.winner = true;
            this.props.updatePlayer(player);
        }
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