import React from 'react';
import PropTypes from 'prop-types';

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
    player : PropTypes.object.isRequired,
    flip : PropTypes.func.isRequired
};

export default Card;