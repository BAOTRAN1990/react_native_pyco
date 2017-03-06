import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import InputFieldComponent from 'components/CustomInputField'
import constVar from 'const/constant'
import CustomViewInfoComponent from 'components/CustomViewInfo'

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Image source={require('assets/images/bg_signin.png')} style={styles.bg_image} resizeMode={Image.resizeMode.cover}>
          <View style={styles.title_container}>
            <Text style={styles.title}>
              User information
            </Text>
          </View>
          <View style={styles.form_container}>
            <CustomViewInfoComponent 
                imageIcon={require('assets/images/user_name.png')}
                displayInfo={this.props.chosenUserInfo.userName}>
            </CustomViewInfoComponent>
            <CustomViewInfoComponent 
                imageIcon={require('assets/images/email.png')}
                displayInfo={this.props.chosenUserInfo.email}>
            </CustomViewInfoComponent>
            <CustomViewInfoComponent 
                imageIcon={require('assets/images/birthday.png')}
                displayInfo={this.props.chosenUserInfo.birthday}>
            </CustomViewInfoComponent>
          </View>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  bg_image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center'
  },
  title_container: {
    flex: 2,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: constVar.colors.WHITE,
    paddingLeft: 20,
    backgroundColor: 'transparent'
  },
  form_container: {
    flex: 5
  }
});

const mapStateToProps = (state) => {
  return {
    chosenUserInfo: state.UserReducer.chosenUser
  }
}

const UserDetailScreen = connect(mapStateToProps)(UserDetail);

export default UserDetailScreen;