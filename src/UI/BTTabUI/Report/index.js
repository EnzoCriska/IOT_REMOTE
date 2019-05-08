import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderReport } from './render';
import { connect } from 'react-redux';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    };
  }
  keys = ['Quạt', 'Đèn', 'Điều hòa', 'Khóa cửa', 'Ổ cắm'];
  colors = ['#cc3399', '#ff6600', '#00b33c', '#e6ac00', '#1affc6']

  componentDidMount() {
    const devices = this.props.data.devices
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    var values = []
    console.log(devices)
    for (let i = 0; i < this.keys.length; i++) {
      var count = 0;
      for (let j = 0; j < devices.length; j++) {
        console.log([this.keys[i], devices[j].metadata.type])
        if (devices[j].metadata.type === this.keys[i]) {
          count++;
        }
      }
      values.push(count)
    }
    console.log(values)
    this.setState({ values: values })
  }

  setLabelWidth(width){
    this.setState({labelWidth: width})
  }


  render() {
    const {labelWidth, selectedSlice}  = this.state
    const { label, value } = selectedSlice;
    const keys = this.keys
    const colors = this.colors
    const values = this.state.values
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
        onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
      }
    })
    var time_user = [];
    for (let i = 0; i < 31; i++){
      let randtpm = Math.random() * 3 + 3
      let rand = Math.round(randtpm *100)/100
      time_user.push(rand)
    }

    return (
      <RenderReport
        data = {data}
        setLabelWidth = {(width) => this.setLabelWidth(width)}
        labelWidth = {labelWidth}
        label = {label}
        value = {value}
        time_user = {time_user}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.devices_reducer
  }
}

export default connect(mapStateToProps)(Report)