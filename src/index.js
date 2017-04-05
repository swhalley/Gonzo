import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router';

import GameBoard from './components/GameBoard';
import JoinGame from './components/JoinGame';
import HomePage from './components/HomePage';

console.log(GameBoard);
console.log(JoinGame);
console.log(HomePage);
console.log(React);


import './css/styles.css';

export default class Application extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Route exact path="/" component={HomePage} />
                <Route path="/join" component={JoinGame} />
                <Route path="/game/:id" component={GameBoard} />
            </BrowserRouter>
        )
    }
}

render( <Application />, document.querySelector( '#app' ));