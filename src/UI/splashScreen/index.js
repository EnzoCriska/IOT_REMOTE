import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderSplash } from './render';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    setTimeout(() => this.props.navigation.navigate("login"), 1500)
  };
  

  render() {
    return (
      <RenderSplash/>
    );
  }
}
