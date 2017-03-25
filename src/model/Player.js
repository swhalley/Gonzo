import uuid from 'uuid/v4.js';

class Player {
    constructor( name, id ){
        this.name = name;
        this.id = id || uuid();
        this.flipped = false;
    }
}

export default Player;