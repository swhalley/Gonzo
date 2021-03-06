import React from 'react';

import CardDeck from './CardDeck';
import AddPlayerForm from './AddPlayerForm';
import GameEngine from './GameEngine';

import Player from '../../model/Player';

export default class GameBoard extends React.Component {
    constructor(){
        super();

        this.state = {
            players : {}
        };
    }

    render() {
        let players = Object.keys( this.state.players ).map( (id ) => this.state.players[id]);

        return (
            <div>
                <AddPlayerForm addPlayer={this.addPlayer.bind(this)} />
                <GameEngine players={players} updatePlayer={this.updatePlayer.bind(this)} />
                <CardDeck players={players} updatePlayer={this.updatePlayer.bind(this)} />
            </div>
        )
    }

    componentWillMount(){
        let players = Object.assign( {}, this.state.players );

        var people = [
            "Lucretia Sylvain", "Miranda Hertlein", "Kathrin Montagna", "Shemika Wiens", "Davina Troxel",
            "Anibal Gholson", "Valeria Villalon", "Ozella Wymer", "Lyndsey Rounds", "Gussie Bustamante",
            "Niki Hetzler", "Marlyn Rey", "Lupe Burke", "Jacinto Casarez", "Cordell Courville",
            "Angelena Sickels", "Talia Harty", "Bret Califano", "David Davies", "Lan Barre",
            "Refugio Hopp", "Marquetta Witherington", "Carlita Stecklein", "Will Armentrout", "Birgit Kerner",
            "Elmira Lemke", "Tasha Stefaniak", "Golda Roeder", "Federico Shuck", "Rodger Culbertson",
            "Victorina Brochu", "Arie Laboy", "Peggy Morvant", "Sharyl Nott", "Josephine Deno",
            "Elenor Buel", "Julee Veiga", "Edgardo Disney", "Agueda Bregman", "Carmella Moriarity",
            "Erline Karr", "Janean Harbour", "Altagracia Kushner", "Hazel Masker", "Hobert Cid",
            "Tegan Sidhu", "Izetta Jacome", "Camie Repp", "Virgie Ely", "Frieda Dionne"
        ];

        people.forEach( (person) => {
            var player = new Player( person );
            players[ player.id ] = player;
        });

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