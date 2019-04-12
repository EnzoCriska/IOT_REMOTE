import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderRoom } from './render';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [
                {
                    device_id: "4534",
                    name: "Đèn",
                    status: "on",
                },
                {
                    device_id: "2567",
                    name: "Đèn",
                    status: "off",
                },
                {
                    device_id: "1232",
                    name: "Quạt",
                    status: "on",
                },
                {
                    device_id: "5677",
                    name: "Quạt",
                    status: "on",
                },
                {
                    device_id: "8884",
                    name: "Quạt",
                    status: "on",
                },
                {
                    device_id: "2345",
                    name: "Quạt",
                    status: "on",
                },
                {
                    device_id: "32543",
                    name: "Quạt",
                    status: "on",
                },
                {
                    device_id: "56867",
                    name: "Quạt",
                    status: "on",
                },
                {
                    device_id: "12354",
                    name: "Quạt",
                    status: "on",
                },
            ]
        };
    }

    goToDevice(item){

    }

    render() {
        const { devices } = this.state
        return (
            <RenderRoom
                devices={devices}
                goToDevice={(item) => this.goToDevice(item)}
            />
        );
    }
}
