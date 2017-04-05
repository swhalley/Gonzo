import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import GameBoard from './components/GameBoard';
import JoinGame from './components/JoinGame';
import HomePage from './components/HomePage';

import './css/styles.css';

export default class Application extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/join" component={JoinGame} />
                <Route path="/game/:id" component={GameBoard} />
            </div>
            </BrowserRouter>
        )
    }
}

render( <Application />, document.querySelector( '#app' ));