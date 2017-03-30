import React from 'react';

class Card extends React.Component {

    render(){
        const player = this.props.player;

        return (
            <div
                 className={`card ${player.flipped ? 'flipped' : ''} ${player.winner ? 'winner' : ''}`}
                 onClick={(event) => this.props.flip(event, player)}>
                <div className='cardFace cardFront'>
                    {player.name}
                </div>
                <div className='cardFace cardBack'></div>
            </div>
        )
    }
}

Card.propTypes = {
    player : React.PropTypes.object.isRequired,
    flip : React.PropTypes.func.isRequired
};

export default Card;