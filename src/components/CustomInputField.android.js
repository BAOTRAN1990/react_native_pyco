import React, { Component, PropTypes} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

import constVar from 'const/constant';

export default class InputFieldComponent extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={this.props.imageIcon} style={styles.image} resizeMode={Image.resizeMode.contain}/>
          <TextInput 
          {...this.props}
          style={styles.inputField}
          underlineColorAndroid='transparent'
          />
        </View>
    );
  }
}

InputFieldComponent.propTypes = {
  imageIcon: PropTypes.number.isRequired,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: constVar.colors.GRAY
  },
  image: {
    flex: 1,
    height: 20,
  },
  inputField: {
    flex: 5,
    height: 50
  }
});
