import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { RenderRoom } from './render';
import { connect } from 'react-redux';
import { deleteDeviceAction } from './action';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
            isReload: false
        };
    }




    goToDevice(item) {
        console.log(["GOTO ", item])
        switch (item.metadata.type) {
            case "Đèn":
                this.props.navigation.navigate("light", { item: item })
                break;
            case "Quạt":
                break;
            case "Điều hòa":
                break;
            case "Khóa cửa":
                break;
            case "Ổ cắm":
                break;
            default:

        }
    }

    deleteDevice(item) {
        const { token } = this.props.token
        console.log(["DELETE ", item])
        Alert.alert(
            "Xác nhận",
            "Bạn chắc chắn muốn xóa thiết bị",
            [
                { text: "Hủy", onPress: () => console.log("Cancel"), style: "cancel" },
                {
                    text: 'Xác nhận', onPress: () => {
                        this.props.deleteDeviceAc(token, item.id)
                    }
                }
            ]
        )
    }

    onReloadDevices(){
        this.props.onReloadDevices()
    }

    render() {

        const {isReload} = this.state

        const { devices } = this.props.prop
        console.log(["DEVICES: ROOM", devices])

        var roomDevices = []
        for (let i = 0; i < devices.length; i++) {
            // console.log(["FOR LOOP: ", devices[i].metadata.room.name, this.props.label])
            if (devices[i].metadata.room.name === this.props.label) {
                roomDevices.push(devices[i])
            }
        }


        return (
            <RenderRoom
                devices={roomDevices}
                goToDevice={(item) => this.goToDevice(item)}
                deleteDevice={(item) => this.deleteDevice(item)}
                isReload = {isReload}
                onReloadDevices = {() => this.onReloadDevices()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.login_reducer,
        prop: state.devices_reducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteDeviceAc: (token, thingId) => {
            dispatch(deleteDeviceAction(token, thingId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
