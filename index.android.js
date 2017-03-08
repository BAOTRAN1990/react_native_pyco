import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import RootComponent from 'src/root';

export default class practice1 extends Component {

  render() {
    return (
      <RootComponent/>
    );
  }
}

AppRegistry.registerComponent('practice1', () => practice1);