import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderAddDevices } from './render';
import { connect } from 'react-redux'
import { addDeviceApi } from '../../../network/API';
import { TYPE_DEVICES } from '../../../util/value_containt/constaint';
import { Toast } from 'native-base';

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
            rooms: [
                {
                    name: "Phòng khách",
                    id: 1
                },
                {
                    name: "Phòng ngủ 1",
                    id: 2
                },
                {
                    name: "Phòng ngủ 2",
                    id: 3
                },
                {
                    name: "Phòng Bếp",
                    id: 4
                },
                {
                    name: "Phòng Đọc sách",
                    id: 5
                },
                {
                    name: "Phòng Tắm",
                    id: 6
                },
                {
                    name: "Phòng Thờ",
                    id: 7
                }
            ]
        };
        
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
        const {device_name, rooms, room_name, type_device} = this.state
        const {token} = this.props.data

        console.log("Select" + this._menu.selectedIndex())
        if(device_name === ""){
            alert("Bạn phải nhập tên thiết bị")
        }else if(this._typeMenu.selectedIndex() === -1){
            alert("Bạn phải chọn loại thiết bị")
        }else if(this._menu.selectedIndex() === -1 && room_name === ""){
            alert("Bạn phải chọn phòng hoặc thêm phòng mới")
        }else{
            if(this._menu.selectedIndex() === -1){
                tpmRoom = room_name
            }else{
                tpmRoom = rooms[this._menu.selectedIndex()]
            }
            const tpmType = type_device[this._typeMenu.selectedIndex()]
            addDeviceApi(token,tpmType,  device_name, tpmRoom).then(res => {
                Toast.show({
                    text:"Thêm thành công!",
                    type: "success"
                })
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

    render() {
        const { rooms, device_name, isAddRoom, room_name, type_device } = this.state
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
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.login_reducer
    }
}

export default connect(mapStateToProps)(AddDevices)