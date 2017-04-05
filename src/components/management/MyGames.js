import React from 'react';
import {View, Text, Switch} from 'react-native';

class MyGames extends React.Component{
    constructor(){
        super();

        this.state = {
            games : [
            { id: '0283490', name: 'My First Game', isOpen: false }, 
            { id: '2398490', name: 'PEIDevs April 2017', isOpen: true },
            { id: '3840923', name: 'Conference 2017', isOpen: true },
            { id: '2984209', name: 'Happy Times', isOpen: false },
            { id: '2394909', name: 'React Testing', isOpen: true }]
        };

        this.renderSwitch = this.renderSwitch.bind(this);
    }

    render(){
        //I want to list all the game names. 
        //To start 2 columns. name and public status
        //to the left of each game there is a switch that lets you manage your public/open games
        //React Native https://facebook.github.io/react-native/docs/switch.html
        return(
            <View>
                {this.state.games.map( this.renderSwitch )}
            </View>
        )
    }

    componentWillMount(){
        //grab a list of all this players games
    }

    renderSwitch( game ){
        return(
            <div key={game.id}>
                <Switch value={game.isOpen} onValueChange={( value ) => {
                    let _games = [...this.state.games];
                    let index = _games.map( _game => _game.id ).indexOf( game.id );

                    _games[index].isOpen = value;
                    this.setState( _games );
                }} />
                <Text>{game.name}</Text>
            </div>
        )
    }
}

export default MyGames;