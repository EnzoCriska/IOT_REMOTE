import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderLightRemote } from './render';

export default class LightRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device_name: ''
        };
    }

    render() {
        const {device_name} = this.state
        return (
            <RenderLightRemote
                ongoBack={() => this.props.navigation.goBack()}
                device_name = {device_name}
            />
        );
    }
}
