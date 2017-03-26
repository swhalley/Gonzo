import React from 'react';

class CardDeck extends React.Component {

    render(){
        let playerIds = Object.keys( this.props.players );
        return (
            <div className='cardDeck'>
                {playerIds.map( this.renderCard.bind(this) )}
            </div>
        )
    }

    renderCard( playerId ){
        const player = this.props.players[ playerId ];

        return (
            <div key={playerId}
                 className={`card ${player.flipped ? 'flipped' : ''} ${playerId === this.props.winner ? 'winner' : ''}`}
                 onClick={(event) => this.flip(event, playerId)}>
                <div className='cardFace cardFront'>
                    {player.name}
                </div>
                <div className='cardFace cardBack'></div>
            </div>
        )
    }

    flip( event, playerId ){
        event.preventDefault();

        let player = this.props.players[playerId ];
        player.flipped = !player.flipped;
        this.props.updatePlayer( player );
    }
}

export default CardDeck;