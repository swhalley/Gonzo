import React from 'react';
import base from '../../util/RebaseStore';

export default class OpenGame extends React.Component {

    constructor(){
        super();
        this.openGame = this.openGame.bind(this);
        this.logout = this.logout.bind(this);
    }

    render(){
        return (
          <div>
            <button onClick={this.openGame}>Open Game</button>
            <button onClick={this.logout}>Logout</button>
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

    logout() {
        base.unauth();
    }

}