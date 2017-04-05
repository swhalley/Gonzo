import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import GameBoard from './components/game/GameBoard';
import JoinGame from './components/management/JoinGame';
import HomePage from './components/management/HomePage';
import MyGames from './components/management/MyGames';

import './css/styles.css';

export default class Application extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/myGames" component={MyGames} />
                <Route path="/join" component={JoinGame} />
                <Route path="/game/:id" component={GameBoard} />
            </div>
            </BrowserRouter>
        )
    }
}

render( <Application />, document.querySelector( '#app' ));