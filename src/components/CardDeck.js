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

    /**
     * Animating winner
     * 1) Potentially using this function to add winner animation.
     * 2) Also looking at CSS Transation Group - But I think that is only for adding/removing from the dom. not on update
     * 3) use style on the div which should be style={getStyle(key)} with a check on the winner id
     */
    componentDidUpdate(){

        if( this.props.winner ){
            //use react-animation to show winner?
        }else {
            //how would I make sure nothing has the winner animation
        }
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