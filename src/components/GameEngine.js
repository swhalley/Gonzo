import React from 'react';

class GameEngine extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.runGame.bind(this)}>Play Game</button>
                <button onClick={this.resetGame.bind(this)}>Reset Game</button>
            </div>
        )
    }

    runGame(){
        const players = this.props.players;
        const remainingPlayerIds = Object.keys(players).filter( (id) => !players[id].flipped);

        if( remainingPlayerIds.length > 1 ){
            const randomPlayerId = remainingPlayerIds[Math.floor(Math.random()*remainingPlayerIds.length)];

            let randomPlayer = players[randomPlayerId];
            randomPlayer.flipped = true;

            this.props.updatePlayer( randomPlayer );

            setTimeout( this.runGame.bind(this), 500 );
        }
        return;
    }

    resetGame(){
        Object.keys( this.props.players ).forEach( (id) => {
            this.props.players[id].flipped = false;
            this.props.updatePlayer( this.props.players[id] );
        });
    }
}

export default GameEngine;