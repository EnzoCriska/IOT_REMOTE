import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderLightRemote } from './render';
import Cloud from '../../../../util/MQTTtoMainFlux/cloud'
var colorsys = require('colorsys')

import DataProcessor from '../../../../util/MQTTtoMainFlux/DataProcessor';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');


class LightRemote extends Component {
    uuid = uuidv1();
    constructor(props) {
        super(props);
        this.state = {
            position: "",
            item: this.props.navigation.getParam("item"),
            light_value: 0,
            valueColor: "#ff44ff",
            isOn: false
        };
    }

    componentWillMount() {

        const item = this.props.navigation.getParam("item")
        const { devices } = this.props.data
        var lights = []
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].metadata.type === item.metadata.type)
                lights.push(devices[i])
        }

        for (let j=0; j < lights.length; j++) {
            if (lights[j] === item) {
                console.log("posison: " + j)
                this.setState({ position: j })
            }
        }
    }

    componentDidMount() {
      this.initListener()
    }
    

    initListener() {
        Cloud.Subscribe("replight" + this.state.position)
        Cloud.Subscribe("light" + this.state.position)
        console.log("subcribe...")

        DataProcessor.AddPushHandler(this.uuid, "replight", this.state.position, this.onListenRep.bind(this), null)
        DataProcessor.AddPushHandler(this.uuid, "light", this.state.position, this.onListen.bind(this), null)
    }

    onListen(data) {
        console.log(data.payloadString)


            const payload = data.payloadString
            console.log(["listend...", payload])
            if (payload === "0") {
                this.setState({ isOn: false, light_value: 0 })
            } else {
                if (payload.substring(0, 1) === "#") {
                    this.setState({ isOn: true, valueColor: payload })
                } else {
                    let valueChange = parseInt(payload) / 100
                    this.setState({ isOn: true, light_value: valueChange })
                }
            }
    }

    onListenRep(data){
        console.log(data.payloadString)
        alert(data.payloadString)
    }

    onChangePoweoff() {
        if (this.state.isOn) {
            Cloud.Send("light" + this.state.position, "0")
        } else {
            Cloud.Send("light"  + this.state.position, "99")
        }
        this.setState({ isOn: !this.state.isOn })

    }

    onChangeColor(color) {
        console.log(color)
        if (!this.state.isOn) {
            alert("Thiết bị đang tắt, vui lòng bật thiết bị trước!")
        } else {
            if (color) {
                console.log(["CHANGECOLOR: ", colorsys.hsv2Hex(color.h, color.s, color.v)])
                const colorSend = colorsys.hsv2Hex(color.h, color.s, color.v)
                this.setState({ valueColor: colorSend })
                Cloud.Send("light"  + this.state.position, colorSend)
            }
        }
    }

    onChangeValue(value) {
        console.log(typeof value)
        if (!this.state.isOn) {
            alert("Thiết bị đang tắt, vui lòng bật thiết bị trước!")
        } else {
            console.log("CHANGE " + value)

            this.setState({ light_value: value })
            let valueChange = Math.ceil(value * 100)
            if (valueChange === 100) {
                valueSend = 99
            } else valueSend = valueChange
            Cloud.Send("light"  + this.state.position, (valueSend).toString())
        }

    }

    render() {
        const { item, light_value, valueColor, isOn } = this.state
        return (
            <RenderLightRemote
                valueColor={valueColor}
                isOn={isOn}
                onChangePoweoff={() => this.onChangePoweoff()}
                ongoBack={() => this.props.navigation.goBack()}
                device_name={item.name}
                onChangeColor={(color) => this.onChangeColor(color)}
                light_value={light_value}
                onChangeValue={(value) => this.onChangeValue(value)}
            />
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        data: state.devices_reducer
    }
}

export default connect(mapStateToProps)(LightRemote)