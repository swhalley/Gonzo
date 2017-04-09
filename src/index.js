import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import GameBoard from './components/game/GameBoard';
import JoinGame from './components/management/JoinGame';
import HomePage from './components/management/HomePage';
import MyGames from './components/management/MyGames';
import Header from './components/management/Header';

// import base from './util/RebaseStore';

import './css/styles.css';

export default class Application extends React.Component {

/**
 * https://github.com/reactjs/react-router-tutorial/tree/master/lessons/04-nested-routes
 */
    render(){
        return (
            <BrowserRouter>
            <div>
                <Header>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/myGames" component={MyGames} />
                    <Route path="/join" component={JoinGame} />
                    <Route path="/game/:id" component={GameBoard} />
                </Header>
            </div>
            </BrowserRouter>
        )
    }
    //Moving this to Header
    // componentWillMount(){
    //     base.onAuth( user => {
    //         let loggedInUser = { uid : user.uid, name : user.displayName };
    //         this.setState( {'userAccount' : loggedInUser } );
    //     });
    // }
}

render( <Application />, document.querySelector( '#app' ));