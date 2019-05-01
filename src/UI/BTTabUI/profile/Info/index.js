import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderInfo } from './render';
import { removeAccessToken } from '../../../../util/function_util/asyncStorage';
import { connect } from 'react-redux';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onToLogout(){
    removeAccessToken()   
    this.props.navigation.navigate("login")
  }

  render() {
    const {user_name} = this.props.login
    return (
      <RenderInfo
      onToLogout = {() => this.onToLogout()}
      user_name = {user_name}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login_reducer
  }
}

export default connect(mapStateToProps)(Info)