import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import InputFieldComponent from 'components/CustomInputField'
import constVar from 'const/constant'

class ListUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.userInfo) {
      //Actions.signUp(this.props.userInfo.full_name);
      Alert.alert('Welcome notice from sign up scene', `Welcome user ${this.props.userInfo.full_name}`);
    } else {
      Alert.alert('Welcome notice from sign up scene', `Welcome anonymous`);
    }
    return (
        <Image source={require('assets/images/bg_signin.png')} style={styles.bg_image} resizeMode={Image.resizeMode.cover}>
          <View style={styles.title_container}>
            <Text style={styles.title}>
              List user
            </Text>
          </View>
          <View style={styles.form_container}>
            
          </View>
          <View style={styles.bottom_container}>
            
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
    flex: 3,
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
  },
  bottom_container: {
    flex: 2
  }
});

const mapStateToProps = (state) => {
  return {
    //errorMsg: state.LogInReducer.error,
    userInfo: state.LogInReducer.user
  }
}

export default ListUserScreen = connect(mapStateToProps)(ListUser);