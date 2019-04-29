import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderSplash } from './render';
import { getAccessToken } from '../../util/function_util/asyncStorage';
import { connect } from 'react-redux';
import { gettingToken } from './action';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.getToken(this)
  };
  

  render() {
    return (
      <RenderSplash/>
    );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getToken: (context) => {
      dispatch(gettingToken(context))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash)