import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { RenderRoom } from './render';
import { connect } from 'react-redux';
import { deleteDeviceAction } from './action';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: []
        };
    }


    

    goToDevice(item){
        console.log(["GOTO " , item])
        this.props.navigation.navigate("light")
    }
 
    deleteDevice(item){
        const {token} = this.props.token
        console.log(["DELETE " , item])
        Alert.alert(
            "Xác nhận",
            "Bạn chắc chắn muốn xóa thiết bị",
            [
                { text: "Hủy", onPress: () => console.log("Cancel"), style: "cancel"},
                {text: 'Xác nhận', onPress: () => {
                    this.props.deleteDeviceAc(token, item.id)
                }}
            ]
        )
    }

    render() {

        const {devices} = this.props.prop
        
          var roomDevices = []
          for (let i = 0; i < devices.length; i++){
              console.log(["FOR LOOP: ",devices[i].metadata.room.name,this.props.label ])
            if(devices[i].metadata.room.name === this.props.label){
                roomDevices.push(devices[i])
            }
          }


        return (
            <RenderRoom
                devices={roomDevices}
                goToDevice={(item) => this.goToDevice(item)}
                deleteDevice = {(item) => this.deleteDevice(item)}
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
