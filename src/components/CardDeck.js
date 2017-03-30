import React from 'react';
import Card from './Card';

class CardDeck extends React.Component {

    constructor(){
        super();
        this.flip = this.flip.bind(this);
    }

    render(){
        let playerIds = Object.keys( this.props.players );
        return (
            <div className='cardDeck'>
                { playerIds.map( (id ) => <Card player={this.props.players[id]} flip={this.flip} />)}
            </div>
        )
    }


    flip( event, playerId ){
        event.preventDefault();
        let player = this.props.players[playerId];

        //Any player but this one is the winner
        if( !player.winner && Object.keys(this.props.players).some((id) => this.props.players[id].winner) ){
            return;
        }

        player.flipped = !player.flipped;
        this.props.updatePlayer( player );
    }
}

export default CardDeck;