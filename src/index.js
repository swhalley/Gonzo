import React from 'react';
import { render } from 'react-dom';
import uuid from 'uuid/v4';

import CardDeck from './components/CardDeck';
import AddPlayerForm from './components/AddPlayerForm';

import './css/styles.css';

class Root extends React.Component {
    constructor(){
        super();

        this.state = {
            players : [ {
                id : uuid(),
                name : 'Sean'
            } ]
        };
    }

    render() {
        return (
            <div>
                <AddPlayerForm addPlayer={this.addPlayer.bind(this)} />
                <CardDeck players={this.state.players} />
            </div>
        )
    }

    addPlayer( player ) {
        let players = [...this.state.players];
        players.push(player);

        this.setState({players});
    }

}

render( <Root />, document.querySelector( '#app' ));