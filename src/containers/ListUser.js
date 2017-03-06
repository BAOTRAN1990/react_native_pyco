import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  ListView
} from 'react-native';
import { connect } from 'react-redux';

import InputFieldComponent from 'components/CustomInputField'
import constVar from 'const/constant'

class ListUser extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.userList)
    };
  }

  render() {
    // if(this.props.userInfo) {
    //   //Actions.signUp(this.props.userInfo.full_name);
    //   Alert.alert('Welcome notice from sign up scene', `Welcome user ${this.props.userInfo.full_name}`);
    // } else {
    //   Alert.alert('Welcome notice from sign up scene', `Welcome anonymous`);
    // }
    return (
        <Image source={require('assets/images/bg_signin.png')} style={styles.bg_image} resizeMode={Image.resizeMode.cover}>
          <View style={styles.title_container}>
            <Text style={styles.title}>
              List user
            </Text>
          </View>
          <View style={styles.form_container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(userData) => <Text>{userData.userName}</Text>}
            />
          </View>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  bg_image: {
    flex: 1,
    width: null,
    height: null
  },
  title_container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: constVar.colors.WHITE,
    paddingLeft: 20,
    backgroundColor: 'transparent'
  },
  form_container: {
    flex: 4
  }
});

const mapStateToProps = (state) => {
  return {
    //errorMsg: state.LogInReducer.error,
    userInfo: state.LogInReducer.user,
    userList: state.UserReducer.userList
  }
}

const ListUserScreen = connect(mapStateToProps)(ListUser);

export default ListUserScreen;