import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderConditioning } from './render';
import { connect } from 'react-redux';
import DataProcessor from '../../../../util/websocket/DataProcessor';
import Cloud from '../../../../util/MQTTtoMainFlux/cloud';
class ConditioningRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "",
            item: this.props.navigation.getParam("item"),
            mode: "heat",
            temp:27,
            isOn: false
        };
    }

    componentWillMount() {

        const item = this.props.navigation.getParam("item")
        const { devices } = this.props.data
        var conditioning = []
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].metadata.type === item.metadata.type)
            conditioning.push(devices[i])
        }

        for (let j = 0; j < conditioning.length; j++) {
            if (conditioning[j] === item) {
                console.log("posison: " + j)
                this.setState({ position: j })
            }
        }
    }

    componentDidMount() {
        this.initListener()
    }


    initListener() {
        Cloud.Subscribe("repconditioning" + this.state.position)
        Cloud.Subscribe("conditioning" + this.state.position)
        console.log("subcribe...")

        DataProcessor.AddPushHandler(this.uuid, "repconditioning", this.state.position, this.onListenRep.bind(this), null)
        DataProcessor.AddPushHandler(this.uuid, "conditioning", this.state.position, this.onListen.bind(this), null)
    }

    onListenRep(data) {
        console.log(data)
    }
    onListen(data){

    }

    onChangeMode(mode){
        this.setState({mode:mode})
    }

    upTemp(){
        this.setState({
            temp: this.state.temp+1
        })
    }

    downTemp(){
        this.setState({
            temp: this.state.temp-1
        })
    }

    onChangePower(){
        this.setState({
            isOn: !this.state.isOn
        })
        Cloud.Send("conditioning" + this.state.position, this.state.isOn.toString())
    }

    render() {
        const {item, mode, temp, isOn} = this.state
        return (
            <RenderConditioning
                device_name = {item.name}
                ongoBack={() => this.props.navigation.goBack()}
                mode = {mode}
                onChangeMode = {(mode) => this.onChangeMode(mode)}
                temp = {temp}
                upTemp = {()=>  this.upTemp()}
                downTemp = {() => this.downTemp()}
                isOn = {isOn}
                onChangePower = {() =>this.onChangePower()}
            />
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        data: state.devices_reducer
    }
}

export default connect(mapStateToProps)(ConditioningRemote)