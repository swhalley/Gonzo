import React from 'react';
import Card from './Card';

class CardDeck extends React.Component {

    constructor(){
        super();
        this.flip = this.flip.bind(this);
    }

    render(){

        return (
            <div className='cardDeck'>
                { this.props.players.map( (player) => <Card player={player} key={player.id} flip={this.flip} />)}
            </div>
        )
    }


    flip( event, player ){
        event.preventDefault();

        //Any player but this one is the winner
        if( !player.winner && this.props.players.some((player) => player.winner) ){
            return;
        }

        player.flipped = !player.flipped;
        this.props.updatePlayer( player );
    }
}

CardDeck.propTypes = {
    players : React.PropTypes.array.isRequired,
    updatePlayer : React.PropTypes.func.isRequired
};

export default CardDeck;