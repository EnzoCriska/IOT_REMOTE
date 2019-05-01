import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderLightRemote } from './render';

var colorsys = require('colorsys')

export default class LightRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam("item"),
            light_value: 0.5,
            valueColor: "#ff44ff",
            isOn: false
        };
    }

    onChangePoweoff(){
        this.setState({isOn: !this.state.isOn})
    }

    onChangeColor(color) {
        console.log(["CHANGECOLOR: ", colorsys.hsv2Hex(color.h, color.s, color.v)])
        this.setState({ valueColor: colorsys.hsv2Hex(color.h, color.s, color.v) })
    }

    onChangeValue(value) {
        console.log("CHANGE " + value)
        this.setState({ light_value: value })
    }

    render() {
        const { item, light_value, valueColor, isOn } = this.state
        return (
            <RenderLightRemote
                valueColor={valueColor}
                isOn={isOn}
                onChangePoweoff = {() => this.onChangePoweoff()}
                ongoBack={() => this.props.navigation.goBack()}
                device_name={item.name}
                onChangeColor={(color) => this.onChangeColor(color)}
                light_value={light_value}
                onChangeValue={(value) => this.onChangeValue(value)}
            />
        );
    }
}
