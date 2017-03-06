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

  _renderRow(rowData, sectionID, rowID, highlightRow){
    return (
      <TouchableHighlight onPress={() => {
          //this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }}>
          <View style={{backgroundColor: '#F6F6F6', padding: 7}}>
            <Text style={{fontSize: 20, color: '#696969'}}>{rowData.userName}</Text>
            <Text style={{fontSize: 15, color: '#696969'}}>Birthday: {rowData.birthday}</Text>
            <Text style={{fontSize: 15, color: '#696969'}}>Email: {rowData.email}</Text>
          </View>
      </TouchableHighlight>
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }

  render() {
    return (
        <Image source={require('assets/images/bg_signin.png')} style={styles.bg_image} resizeMode={Image.resizeMode.cover}>
          <View style={styles.title_container}>
            <Text style={styles.title}>
              List users
            </Text>
          </View>
          <View style={styles.form_container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              renderSeparator={this._renderSeparator}
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
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 30,
    color: constVar.colors.WHITE,
    //paddingLeft: 20,
    backgroundColor: 'transparent'
  },
  form_container: {
    flex: 8
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