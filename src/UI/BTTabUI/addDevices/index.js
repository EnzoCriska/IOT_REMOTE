import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderAddDevices } from './render';

export default class AddDevices extends Component {
    _menu = null
    constructor(props) {
        super(props);
        this.state = {
            device_name: '',
            isAddRoom: false,
            room_name: "",
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
    
    onAddDevice(){
        const {device_name, rooms} = this.state

        console.log(rooms[this._menu.selectedIndex()])
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
        const { rooms, device_name, isAddRoom, room_name } = this.state
        return (
            <RenderAddDevices
                device_name={device_name}
                onChangeName={(text) => this.onChangeName(text)}
                rooms={rooms}
                setMenuRef={(ref) => this.setMenuRef(ref)}
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
