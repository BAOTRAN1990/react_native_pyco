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
import { Actions } from 'react-native-router-flux';

import CircleImageComponent from 'components/CircleImage'
import InputFieldComponent from 'components/CustomInputField'
import constVar from 'const/constant'

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    //this.onForwardHandler = this.onForwardHandler.bind(this);
  }

  static propTypes = {
    //navigator: PropTypes.object.isRequired
  }

  handleSignIn(){
    Alert.alert(
      'Account info',
      `Username: ${this.state.userName} - Password: ${this.state.password}`);
  }

  render() {
    return (
          <Image source={require('assets/images/bg_signin.png')} style={styles.bg_image} resizeMode={Image.resizeMode.cover}>
            <View style={styles.check_icon_container}>
              <CircleImageComponent image_url={require('assets/images/check_red.png')}/>
            </View>
            <View style={styles.input_fields_container}>
              <InputFieldComponent 
                placeholder='User name'
                imageIcon={require('assets/images/user_name.png')}
                secureTextEntry={false} placeholderTextColor={constVar.colors.WHITE}
                onChangeText={(userName) => this.setState({userName})}  
              />
              <InputFieldComponent 
                placeholder='Password' 
                imageIcon={require('assets/images/password.png')} 
                secureTextEntry={true}
                placeholderTextColor={constVar.colors.WHITE} 
                onChangeText={(password) => this.setState({password})} 
              />
              <View style={styles.forgot_password_container}>
                <TouchableOpacity>
                  <Text style={{backgroundColor: 'transparent'}}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottom_container}>
              <View style={styles.sign_in_button_container}>
                <TouchableOpacity style={styles.sign_in_button} onPress={this.handleSignIn}>
                  <Text style={{fontSize: 20, color: constVar.colors.WHITE }}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sign_up_container}>
                <Text style={{backgroundColor: 'transparent'}}>Don't have an account?  </Text>
                <TouchableOpacity onPress={Actions.signUp}>
                  <Text style={{fontSize: 18, color: constVar.colors.WHITE, backgroundColor: 'transparent'}}>Sign Up</Text>
                </TouchableOpacity>
              </View>
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
  check_icon_container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_fields_container: {
    flex: 1
  },
  forgot_password_container: {
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  bottom_container: {
    flex: 1
  },
  sign_in_button_container: {
    flex: 1,
    flexDirection: 'row'
  },
  sign_up_container: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sign_in_button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constVar.colors.PINK
  }
});