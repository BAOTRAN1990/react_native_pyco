import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import { Provider } from 'react-redux';

import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import ListUser from 'containers/ListUser'
import UserDetail from 'containers/UserDetail'
import store from 'config_manager/store';

export default class RootComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="signIn" component={SignIn} title="Sign In" initial={true} hideNavBar={true}/>
            <Scene key="signUp" component={SignUp} hideNavBar={false} navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}/>
            <Scene key="listUser" component={ListUser} hideNavBar={true} navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}/>
            <Scene key="userDtl" component={UserDetail} hideNavBar={false} navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
