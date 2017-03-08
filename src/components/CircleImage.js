import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

export default class CircleImageComponent extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={this.props.image_url} style={styles.image}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
  }
});
