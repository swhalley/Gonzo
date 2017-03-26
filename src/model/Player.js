import uuid from 'uuid/v4.js';

class Player {
    constructor( name, id ){
        this.name = name;
        this.id = id || uuid();
        this.flipped = false;
        this.winner = false;

        this.reset = this.reset.bind(this);
    }

    reset(){
        this.flipped = false;
        this.winner = false;
    }
}

export default Player;