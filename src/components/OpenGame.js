import React from 'react'

export default class OpenGame extends React.Component {

    constructor(){
        super();
        this.openGame = this.openGame.bind(this);

        this.state = {
            user : null
        }
    }

    render(){
        return (
          <div>
            <button onClick={this.openGame}>Open Game</button>
          </div>
        )
    }

    

    openGame(){
        console.log( 'game is open');
    }
}