import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderAddDevices } from './render';
import { connect } from 'react-redux'
import { addDeviceApi } from '../../../network/API';
import { TYPE_DEVICES } from '../../../util/value_containt/constaint';
import { Toast } from 'native-base';
import { addDeviceAction } from './action';
import Cloud from '../../../util/MQTTtoMainFlux/cloud'

class AddDevices extends Component {
    _menu = null
    _typeMenu = null
    constructor(props) {
        super(props);
        this.state = {
            device_name: '',
            isAddRoom: false,
            room_name: "",
            type_device: TYPE_DEVICES,
            rooms: [],
            device_address: this.props.navigation.getParam("mac")
        };
        
    }

    componentDidUpdate(prevProps, prevState) {
         if ( prevState.device_address!== this.props.navigation.getParam("mac")) 
         { 
             console.log("change")
             this.setState({device_address: this.props.navigation.getParam("mac")})
        }
    }

    onChangeName(text) {
        this.setState({ device_name: text })
    }
    
    setMenuRef(ref) {
        this._menu = ref
    }
    setTypeMenuRef(ref){
        this._typeMenu = ref
    }
    
    onAddDevice(){
        const {device_name, room_name, type_device, device_address} = this.state
        const {token} = this.props.data
        const {rooms} = this.props.devices

        console.log("Select" + this._menu.selectedIndex())
        if(device_name === ""){
            alert("Bạn phải nhập tên thiết bị")
        }else if(this._typeMenu.selectedIndex() === -1){
            alert("Bạn phải chọn loại thiết bị")
        }else if(this._menu.selectedIndex() === -1 && room_name === ""){
            alert("Bạn phải chọn phòng hoặc thêm phòng mới")
        }else{
            if(this._menu.selectedIndex() === -1){
                tpmRoom = {
                    id: rooms.length,
                    name: room_name}
            }else{
                tpmRoom = rooms[this._menu.selectedIndex()]
            }
            const tpmType = type_device[this._typeMenu.selectedIndex()]
            Cloud.Send("connect", device_address)
            addDeviceApi(token,tpmType,  device_name, tpmRoom, false).then(res => {
                Toast.show({
                    text:"Thêm thành công!",
                    type: "success"
                })
                this.setState({device_name: '', room_name: ''})
            })
            .catch(err => Toast.show({
                text:"Thêm thất bại!",
                type: "danger"
            }))
        }
        
        
    }

    onChangeAddRoom(){
        this.setState({
            isAddRoom: !this.state.isAddRoom
        })
    }

    onChangeRoomName(text){
        this.setState({
            room_name: text
        })
    }

    onToWFScan(){
        this.props.navigation.navigate("bleScan")
    }

    onChangeaddress(text){
        this.setState({device_address: text})
    }


    render() {
        const { device_name, isAddRoom, room_name, type_device, device_address } = this.state
        const {rooms} = this.props.devices
        return (
            <RenderAddDevices
                device_name={device_name}
                type_device = {type_device}
                onChangeName={(text) => this.onChangeName(text)}
                rooms={rooms}
                setMenuRef={(ref) => this.setMenuRef(ref)}
                setTypeMenuRef = {(ref) => this.setTypeMenuRef(ref)}
                onAddDevice = {() => this.onAddDevice()}
                isAddRoom = {isAddRoom}
                onChangeAddRoom = {() => this.onChangeAddRoom()}
                room_name = {room_name}
                onChangeRoomName = {(text) => this.onChangeRoomName(text)}
                onToWFScan = {() => this.onToWFScan()}
                device_address = {device_address}
                onChangeaddress = {(text) => this.onChangeaddress(text)}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.login_reducer,
        devices: state.devices_reducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDeviceAc: (token, type, name, room) => {
            dispatch(addDeviceAction(token, type, name, room))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDevices)