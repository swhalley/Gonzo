import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router';

import GameBoard from './components/GameBoard';
import JoinGame from './components/JoinGame';
import HomePage from './components/HomePage';

import './css/styles.css';

export default class extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/join" component={JoinGame} />
                    <Route exact path="/game/:id" component={GameBoard} />
                </div>
            </BrowserRouter>
        )
    }
}

render( <Application />, document.querySelector( '#app' ));