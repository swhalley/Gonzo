import React from 'react';

export default class JoinGame extends React.Component {
    constructor(){
        super();

        this.state = {
            games : ['Game One', 'Game Two','Game Three']
        };

        this.renderGame = this.renderGame.bind(this);
    }

    render() {
        return(
            <div>
                { this.state.games.map( this.renderGame ) }
            </div>
        )
    }

    componentWillRender(){
        //we will want to load all game info here
    }

    renderGame( game ){
        return(
            <div class={game}>{game}</div>
        )
    }
}