import React from 'react';

class CardDeck extends React.Component {
    renderCard( playerId ){
        const player = this.props.players[ playerId ];

        return (
            <li className={`card ${player.flipped ? 'flipped' : ''}`} key={playerId} onClick={(event) => this.flip(event, playerId)}>
                {player.name}
            </li>
        )
    }

    flip( event, playerId ){
        event.preventDefault();

        let player = this.props.players[playerId ];
        player.flipped = !player.flipped;

        this.props.updatePlayer( player );
    }

    render(){
        let playerIds = Object.keys( this.props.players );
        return (
            <ul>
                {playerIds.map( this.renderCard.bind(this) )}
            </ul>
        )
    }
}

export default CardDeck;