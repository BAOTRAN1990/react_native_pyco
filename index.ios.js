/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
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

  render() {
    return (
          <Navigator
            initialRoute={{id: 'signIn', title: 'Sign in screen', index: 0}}
            renderScene={this.renderScreen}
          />
    );
  }
}

AppRegistry.registerComponent('practice1', () => practice1);
