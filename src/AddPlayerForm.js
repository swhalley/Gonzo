import React from 'react';
import uuid from 'uuid/v4';

class AddPlayerForm extends React.Component{
    formSubmit( event ){
        event.preventDefault();

        let player = {};
        player.name = this.playerForm.name.value;
        player.id = uuid();

        this.props.addPlayer( player );

    }

    render(){
        return (
            <form onSubmit={(event) => this.formSubmit( event )} ref={(input) => this.playerForm = input }>
                <input required type="text" name="name" placeholder="Enter Name" />
                <button>Add</button>
            </form>
        )
    }
}

export default AddPlayerForm;