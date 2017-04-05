import React from 'react';
import {Link} from 'react-router-dom';

export default class JoinGame extends React.Component {
    constructor(){
        super();

        this.state = {
            games : [{
                id : '1231414',
                name : 'Game One'
            },{
                id : '345453',
                name : 'Game Two'
            },{
                id : '234234',
                name : 'Game Three'
            }]
        };

        this.renderGame = this.renderGame.bind(this);
    }

    render() {
        return(
            <div>
                <h1>Public Games</h1>
                { this.state.games.map( this.renderGame ) }
            </div>
        )
    }

    componentWillRender(){
        //we will want to load all game info here
    }

    renderGame( game ){
        return(
            <div key={game.id}><Link to={`/game/${game.id}`}>{game.name}</Link></div>
        )
    }
}