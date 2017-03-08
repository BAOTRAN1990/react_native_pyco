import React, { Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import constVar from 'const/constant';

export default class CustomViewInfoComponent extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={this.props.imageIcon} style={styles.image} resizeMode={Image.resizeMode.contain}/>
          <View style={{flex: 5, height: 50, justifyContent: 'center'}}>
            <Text {...this.props} style={styles.info}>{this.props.displayInfo}</Text>
          </View>
        </View>
    );
  }
}

CustomViewInfoComponent.propTypes = {
  imageIcon: PropTypes.number.isRequired,
  displayInfo: PropTypes.string.isRequired
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
  info: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: constVar.colors.WHITE
  }
});
