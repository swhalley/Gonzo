import React from 'react';

class CardDeck extends React.Component {
    renderCard( player ){
        return (
            <li className='card' key={player.id}>{player.name}</li>
        )
    }

    render(){

        return (
            <ul>
                {this.props.players.map( this.renderCard )}
            </ul>
        )
    }
}

export default CardDeck;