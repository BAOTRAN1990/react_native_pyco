/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

import SignIn from 'containers/SignIn'
import SignUp from 'containers/SignUp'

export default class practice1 extends Component {
  renderScreen(route, navigator){
    if(route.id === 'signUp'){
      return <SignUp navigator={navigator}/>;
    }
    return <SignIn navigator={navigator}/>;
  }

  leftButtonHandler(route, navigator, index, navState){
    if(route.index === 0){
      return null;
    } else{
      return (
        <TouchableHighlight onPress={() => navigator.pop({navigationBarHidden: false})}>
          <Image source={require('assets/images/back.png')}/>
        </TouchableHighlight>
      );
    }
  }

  render() {
    return (
          <Navigator
            initialRoute={{id: 'signIn', title: 'Sign in screen', index: 0}}
            renderScene={this.renderScreen}
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={{
                  LeftButton: this.leftButtonHandler,
                  RightButton: () => null,
                  Title: () => null
                }}
              />
            }
          />
    );
  }
}

AppRegistry.registerComponent('practice1', () => practice1);
