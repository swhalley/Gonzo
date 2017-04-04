import React from 'react';
import base from '../util/RebaseStore';

export default class OpenGame extends React.Component {

    constructor(){
        super();
        this.openGame = this.openGame.bind(this);

        this.state = {
            user : null
        }
    }

    render(){
        return (
          <div>
            <button onClick={this.openGame}>Open Game</button>
          </div>
        )
    }

    

    openGame(){
        base.authWithOAuthPopup('github', (err, payload) =>{
            if(err){
                console.log( 'SSO failed', err);
                return;
            }
        });
    }
}