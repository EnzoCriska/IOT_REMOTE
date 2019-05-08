import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderLock } from './render';
import { connect } from 'react-redux';
import DataProcessor from '../../../../util/websocket/DataProcessor';
import Cloud from '../../../../util/MQTTtoMainFlux/cloud';

class LockRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "",
            item: this.props.navigation.getParam("item"),
            isLock: false
        };
    }

    componentWillMount() {

        const item = this.props.navigation.getParam("item")
        const { devices } = this.props.data
        var locks = []
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].metadata.type === item.metadata.type)
                locks.push(devices[i])
        }

        for (let j = 0; j < locks.length; j++) {
            if (locks[j] === item) {
                console.log("posison: " + j)
                this.setState({ position: j })
            }
        }
    }

    componentDidMount() {
        this.initListener()
    }


    initListener() {
        Cloud.Subscribe("replock" + this.state.position)
        Cloud.Subscribe("lock" + this.state.position)
        console.log("subcribe...")

        DataProcessor.AddPushHandler(this.uuid, "replock", this.state.position, this.onListenRep.bind(this), null)
        DataProcessor.AddPushHandler(this.uuid, "lock", this.state.position, this.onListen.bind(this), null)
    }

    onListenRep(data) {
        console.log(data)
    }

    onListen(data) {
        const payload = data.payloadString
        if (payload === "lock") {
            this.setState({ isLock: true })
        } else {
            this.setState({ isLock: false })
        }
    }

    onChangeLock() {
        if (!this.state.isLock) {
            Cloud.Send("lock" + this.state.position, "lock")
        } else {
            Cloud.Send("lock" + this.state.position, "unlock")
        }
        this.setState({
            isLock: !this.state.isLock
        })
    }

    render() {
        const { item, isLock, position } = this.state
        return (
            <RenderLock
                device_name={item.name}
                room={item.metadata.room.name}
                position={position}
                ongoBack={() => this.props.navigation.goBack()}
                isLock={isLock}
                onChangeLock={() => this.onChangeLock()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.devices_reducer
    }
}

export default connect(mapStateToProps)(LockRemote)