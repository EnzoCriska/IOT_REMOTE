import React from 'react';
import {
    View, Text, TouchableOpacity, TextInput, Image
} from 'react-native';
import { styles } from './style';
import { Icon } from 'native-base';
import { STRINGS } from '../../../util/value_containt/strings';
import { Dropdown } from 'react-native-material-dropdown'

export const RenderAddDevices = ({
    device_name = "",
    onChangeName = () => { },
    rooms = [],
    setMenuRef = () => { },
    onAddDevice = () => { },
    isAddRoom = false,
    onChangeAddRoom = () => { },
    room_name = "",
    onChangeRoomName = () => { },
    onToWFScan = () => {}
}) => {
    let data_rooms = [];

    for (let i = 0; i < rooms.length; i++) {
        data_rooms.push({
            value: rooms[i].name
        })
    }
    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftHeaderContainer}>
                    <TouchableOpacity
                        onPress = {() => onToWFScan()}>
                        <Icon
                            type="FontAwesome"
                            name="wifi"
                            style={styles.qrIconStyle}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rightHeaderContainer}>
                    <TouchableOpacity
                    >
                        <Icon
                            type="FontAwesome"
                            name="qrcode"
                            style={styles.qrIconStyle}
                        />
                    </TouchableOpacity>
                </View>



                <View style={styles.midHeaderContainer}><Text style={styles.textTitle}>Thêm thiết bị</Text></View>


            </View>

            <View style={styles.container}>
                <View style={styles.addbodyContainer}>

                    <Image
                        source={require('../../../media/coverAdd.png')}
                        style={{ width: 250, height: 150, marginBottom: 50 }} />

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Tên thiết bị"
                            value={device_name}
                            onChangeText={(text) => onChangeName(text)}
                        />
                    </View>

                    <View style={styles.selectionContainer}>
                        <View style={styles.categorySelect}>
                            <Dropdown
                                baseColor="red"
                                textColor="grey"
                                label='Phòng'
                                data={data_rooms}
                                ref={setMenuRef}
                            />

                        </View>
                        <TouchableOpacity
                            onPress={() => onChangeAddRoom()}>
                            <Icon
                                type="Ionicons"
                                name="md-add-circle"
                                style={styles.addRoomIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    {isAddRoom ?
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Tên phòng"
                                value={room_name}
                                onChangeText={(text) => onChangeRoomName(text)}
                            />
                        </View> : <View></View>
                    }

                    <TouchableOpacity
                        onPress={() => onAddDevice()}
                        style={styles.addDeviceBtn}>
                        <Text style={styles.textTitle}>Thêm</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}