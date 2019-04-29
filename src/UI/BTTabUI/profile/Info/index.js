import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderInfo } from './render';
import { removeAccessToken } from '../../../../util/function_util/asyncStorage';

export default class Info extends Component {
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
    return (
      <RenderInfo
      onToLogout = {() => this.onToLogout()}
      />
    );
  }
}
