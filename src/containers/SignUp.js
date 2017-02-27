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

import InputFieldComponent from 'components/CustomInputField'
import constVar from 'const/constant'

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      email: '',
      birthday: ''
    };
    this.backToSignInHandler = this.backToSignInHandler.bind(this);
    //this.onForwardHandler = this.onForwardHandler.bind(this);
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  backToSignInHandler(){
    this.props.navigator.pop();
  }

  render() {
    return (
        <Image source={require('assets/images/bg_signin.png')} style={styles.bg_image} resizeMode={Image.resizeMode.cover}>
          <View style={styles.title_container}>
            <Text style={styles.title}>
              Sign Up
            </Text>
          </View>
          <View style={styles.form_container}>
            <InputFieldComponent 
                placeholder='Name'
                imageIcon={require('assets/images/user_name.png')}
                secureTextEntry={false} placeholderTextColor={constVar.colors.WHITE}
                onChangeText={(userName) => this.setState({userName})}  
            />
            <InputFieldComponent 
                placeholder='Email'
                imageIcon={require('assets/images/email.png')}
                secureTextEntry={false} placeholderTextColor={constVar.colors.WHITE}
                onChangeText={(email) => this.setState({email})}  
            />
            <InputFieldComponent 
                placeholder='Password'
                imageIcon={require('assets/images/password.png')}
                secureTextEntry={false} placeholderTextColor={constVar.colors.WHITE}
                onChangeText={(password) => this.setState({password})}  
            />
            <InputFieldComponent 
                placeholder='Birthday'
                imageIcon={require('assets/images/birthday.png')}
                secureTextEntry={false} placeholderTextColor={constVar.colors.WHITE}
                onChangeText={(birthday) => this.setState({birthday})}  
            />
          </View>
          <View style={styles.bottom_container}>
            <View style={styles.join_button_container}>
              <TouchableOpacity style={styles.join_button} onPress={this.handleJoin}>
                <Text style={{fontSize: 20, color: constVar.colors.WHITE }}>Join</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sign_in_container}>
              <Text style={{backgroundColor: 'transparent'}}>Already have an account?  </Text>
              <TouchableOpacity onPress={this.backToSignInHandler}>
                <Text style={{fontSize: 18, color: constVar.colors.WHITE, backgroundColor: 'transparent'}}>Sign In</Text>
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
  title_container: {
    flex: 3,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: constVar.colors.WHITE,
    paddingLeft: 20
  },
  form_container: {
    flex: 4
  },
  bottom_container: {
    flex: 2
  },
  join_button_container: {
    flex: 1,
    flexDirection: 'row'
  },
  join_button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constVar.colors.PINK
  },
  sign_in_container: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});