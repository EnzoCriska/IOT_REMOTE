import React, { Component } from 'react';
import { View, Text , DeviceEventEmitter} from 'react-native';
import { RenderFanRemote } from './render';
import DataProcessor from '../../../../util/MQTTtoMainFlux/DataProcessor';
import Cloud from '../../../../util/MQTTtoMainFlux/cloud';
import { connect } from 'react-redux';

import { SensorManager } from 'NativeModules';

class FanRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "",
            room_temp: 27,
            item: this.props.navigation.getParam("item"),
        };

    }

    componentWillMount() {
        const item = this.props.navigation.getParam("item")
        const { devices } = this.props.data
        var fans = []
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].metadata.type === item.metadata.type)
                fans.push(devices[i])
        }
        for (let j = 0; j < fans.length; j++) {
            if (fans[j] === item) {
                console.log("posison: " + j)
                this.setState({ position: j })
            }
        }
    }
    componentDidMount() {
        this.initListener()
        SensorManager.startThermometer(1000);
        DeviceEventEmitter.addListener('Thermometer', function (data) {
            console.log(data)
            console.log("===========================")
        });
    }

    initListener() {
        Cloud.Subscribe("fan" + this.state.position)
        Cloud.Subscribe("repfan" + this.state.position)
        console.log("subcribe...")

        DataProcessor.AddPushHandler(this.uuid, "repfan", + this.state.position, this.onListenRep.bind(this), null)
        DataProcessor.AddPushHandler(this.uuid, "fan", + this.state.position, this.onListen.bind(this), null)
    }


    onListenRep(data) {
        console.log(data)
    }

    onListen(data) {
        console.log(data)
    }

    changeSwap() {
        this.setState({
            isSwap: !this.state.isSwap
        })
        Cloud.Send("fan" + this.state.position, "isSwap")
    }

    changeLevel(level) {
        this.setState({ isLevel: level, isOn: true })
        Cloud.Send("fan" + this.state.position, level.toString())
    }

    changeOn() {
        if (this.state.isOn) {
            this.setState({
                isOn: false,
                isLevel: 0
            })
            Cloud.Send("fan" + this.state.position, "0")
        } else {
            this.setState({
                isOn: true,
                isLevel: 1
            })
            Cloud.Send("fan" + this.state.position, "1")
        }
    }

    render() {
        const { item, isSwap, isLevel, isOn, room_temp } = this.state
        return (
            <RenderFanRemote
                device_name={item.name}
                ongoBack={() => this.props.navigation.goBack()}
                room_temp = {room_temp}
                isSwap={isSwap}
                changeSwap={() => this.changeSwap()}
                isLevel={isLevel}
                changeLevel={(level) => this.changeLevel(level)}
                isOn={isOn}
                changeOn={() => this.changeOn()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.devices_reducer
    }
}
export default connect(mapStateToProps)(FanRemote)
