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
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import InputFieldComponent from 'components/CustomInputField'
import constVar from 'const/constant'
import {viewUserDtlAsync} from 'redux_manager/user_action_creator'

class ListUser extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.userList)
    };
    this.pressUserHandler = this.pressUserHandler.bind(this);
    this._renderRow = this._renderRow.bind(this);
  }

  pressUserHandler(sectionID, rowID, userID){
    this.props.viewUserInfo(userID);
    Actions.userDtl();
  }

  _renderRow(rowData, sectionID, rowID, highlightRow){
    return (
      <TouchableHighlight onPress={() => {
        highlightRow(sectionID, rowID);
        this.pressUserHandler(sectionID, rowID, rowData.userID);
      }}>
          <View style={styles.row}>
            <View style={styles.row_icon}>
              <Image source={require('assets/images/man_icon.png')} style={{width: 50, height: 50}}/>
            </View>
            <View style={styles.row_info}>
              <Text style={{fontSize: 20, color: '#696969'}}>{rowData.userName}</Text>
              <Text style={{fontSize: 15, color: '#696969'}}>Email: {rowData.email}</Text>
            </View>
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
    paddingLeft: 7,
    backgroundColor: 'transparent'
  },
  form_container: {
    flex: 8
  },
  row: {
    backgroundColor: '#F6F6F6', 
    padding: 7,
    flexDirection: 'row'
  },
  row_icon: {
    flex: 1,
    justifyContent: 'center'
  },
  row_info: {
    flex: 4,
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    userInfo: state.LogInReducer.user,
    userList: state.UserReducer.userList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewUserInfo: (userID) => dispatch(viewUserDtlAsync(userID))
  }
}

const ListUserScreen = connect(mapStateToProps, mapDispatchToProps)(ListUser);

export default ListUserScreen;