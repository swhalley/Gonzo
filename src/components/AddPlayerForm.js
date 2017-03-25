import React from 'react';
import Player from '../model/Player';

class AddPlayerForm extends React.Component{
    formSubmit( event ){
        event.preventDefault();
        this.props.addPlayer( new Player( this.playerForm.name.value ) );
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