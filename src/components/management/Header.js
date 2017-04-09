import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import base from '../../util/RebaseStore';

const styles = StyleSheet.create({
    headerAlign : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  
    headerStyle: {
        height: '34px',
        borderBottomColor : 'black',
        borderBottomStyle : 'solid',
        borderBottomWidth : '1px'
    },
    loggedIn: {
        justifyContent: 'flex-end',
    },
    gap : {
        marginRight: '5px'
    },
    link : {
        color: 'blue'
    }
});

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            userAccount : null
        };

        this.renderLogin = this.renderLogin.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    render(){
        return ( 
            <View>
                <View style={[styles.headerAlign, styles.headerStyle]}>
                    <Text>Gonzo</Text>
                    {this.renderLogin()}
                </View>
                {this.props.children}
            </View>
        )
    }

    componentWillMount(){
        base.onAuth( user => {
            if( user ){
                let loggedInUser = { uid : user.uid, name : user.displayName };
                this.setState( {'userAccount' : loggedInUser } );
            }
        });
    }

    renderLogin(){
        if( this.state.userAccount ){
            return (
                <View style={[styles.headerAlign, styles.loggedIn]}>
                    <Text style={styles.gap}>{this.state.userAccount.name}</Text>
                    <Text style={styles.link} onPress={this.logout}>Logout</Text>
                </View>
            )
        } else {
            return (
                <Button onPress={this.login} title="Login with Github" color="#841584"/>
            )
        }
    }

    login(){
        base.authWithOAuthPopup('github', (err, payload) =>{
            if(err){
                console.log( 'SSO failed', err);
                return;
            }

            let loggedInUser = { uid : payload.user.uid, name : payload.user.displayName };
            this.setState( { 'userAccount' : loggedInUser});
        });
    }

    logout(){
        base.unauth();
        this.setState( { 'userAccount' : null} );
    }
}