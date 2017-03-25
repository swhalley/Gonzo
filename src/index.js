import React from 'react';
import { render } from 'react-dom';

import CardDeck from './components/CardDeck';
import AddPlayerForm from './components/AddPlayerForm';

import Player from './model/Player';

import './css/styles.css';

class Root extends React.Component {
    constructor(){
        super();

        this.state = {
            players : {}

        };
    }

    render() {
        return (
            <div>
                <AddPlayerForm addPlayer={this.addPlayer.bind(this)} />
                <CardDeck players={this.state.players} updatePlayer={this.updatePlayer.bind(this)} />
            </div>
        )
    }

    componentWillMount(){
        let players = Object.assign( {}, this.state.players );

        var player = new Player( 'Sean' );
        players[ player.id ] = player;

        this.setState( { players })
    }

    addPlayer( player ) {
        let players = Object.assign( {}, this.state.players );
        players[ player.id ] = player;

        this.setState({players});
    }

    updatePlayer( player ){
        let players = Object.assign( {}, this.state.players );
        players[ player.id ] = player;

        this.setState( {players});
    }

}

render( <Root />, document.querySelector( '#app' ));