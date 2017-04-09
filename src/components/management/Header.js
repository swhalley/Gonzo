import React from 'react';
import {Button, View} from 'react-native';
import base from '../../util/RebaseStore';


export default class Header extends React.Component {
    constructor(){
        super();

        this.doOAuth = this.doOAuth.bind(this);
    }

    render(){
        return ( 
            <View>
                <Button onPress={this.doOAuth} title="Login with Github" color="#841584"/>
                {this.props.children}
            </View>
        )
    }

    doOAuth(){
        base.authWithOAuthPopup('github', (err, payload) =>{
            if(err){
                console.log( 'SSO failed', err);
                return;
            }
        });
    }
}