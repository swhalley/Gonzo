import React from 'react';
import {Link} from 'react-router-dom';

export default class HomePage extends React.Component {
    render() {
        return(
            <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/join">Join a Game</Link></li>
                <li><Link to="/myGames/">My Games</Link></li>
            </ul>
            </div>
        )
    }
}