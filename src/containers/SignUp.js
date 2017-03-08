import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import InputFieldComponent from 'components/CustomInputField'
import addUser from 'redux_manager/user_action_creator'
import constVar from 'const/constant'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      email: '',
      birthday: ''
    };
    this.backToSignInHandler = this.backToSignInHandler.bind(this);
    this.joinHandler = this.joinHandler.bind(this);
  }

  static propTypes = {
    //navigator: PropTypes.object.isRequired
  }

  backToSignInHandler(){
    Actions.pop();
  }

  joinHandler(){
    // Alert.alert(
    //   'New account info',
    //   `Username: ${this.state.userName} - Password: ${this.state.password}
    //    Email: ${this.state.email} - Birthday: ${this.state.birthday}`);
    let newUser = {};
    newUser.userName = this.state.userName;
    newUser.password = this.state.password;
    newUser.email = this.state.email;
    newUser.birthday = this.state.birthday;
    this.props.addUser(newUser);
  }

  render() {
    let dynaJoinButton;
    if (this.props.loading){
      dynaJoinButton = <ActivityIndicator
                            animating={this.props.loading}
                            color={constVar.colors.WHITE}
                            size="large"
                          />;
    } else {
      dynaJoinButton = (<TouchableOpacity style={styles.join_button} onPress={this.joinHandler}>
                          <Text style={{fontSize: 20, color: constVar.colors.WHITE }}>Join</Text>
                        </TouchableOpacity>);
    }

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
                secureTextEntry={true} placeholderTextColor={constVar.colors.WHITE}
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
              {dynaJoinButton}
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
    paddingLeft: 20,
    backgroundColor: 'transparent'
  },
  form_container: {
    flex: 4
  },
  bottom_container: {
    flex: 2
  },
  join_button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
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

const mapStateToProps = (state) => {
  return {
    //userInfo: state.UserReducer.userList,
    loading: state.CommonReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (userInfo) => {
      dispatch(addUser(userInfo))
    }
  }
}

const SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpScreen;