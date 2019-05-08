import React from 'react';
import {
    View, Text, TouchableOpacity, TextInput, Image, ScrollView
} from 'react-native';
import { styles } from './style';
import { Icon } from 'native-base';
import { STRINGS } from '../../../util/value_containt/strings';
import { Dropdown } from 'react-native-material-dropdown'
import { APP_STYLE_COLOR } from '../../../util/app_style_containt/style';

export const RenderAddDevices = ({
    device_name = "",
    type_device = [],
    onChangeName = () => { },
    rooms = [],
    setMenuRef = () => { },
    setTypeMenuRef = () => { },
    onAddDevice = () => { },
    isAddRoom = false,
    onChangeAddRoom = () => { },
    room_name = "",
    onChangeRoomName = () => { },
    onToWFScan = () => { }
}) => {
    let data_rooms = [];

    for (let i = 0; i < rooms.length; i++) {
        data_rooms.push({
            value: rooms[i].name
        })
    }

    let data_type = [];
    for (let i = 0; i < type_device.length; i++) {
        data_type.push({
            value: type_device[i]
        })
    }


    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftHeaderContainer}>
                    <TouchableOpacity
                        onPress={() => onToWFScan()}>
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

            <ScrollView style={{ flex: 1, }}>
                <View style={{flex:1, justifyContent: 'center',}}>
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
                                    baseColor={APP_STYLE_COLOR}
                                    textColor="grey"
                                    data={data_type}
                                    label="Loại"
                                    ref={setTypeMenuRef}
                                />
                            </View>
                        </View>

                        <View style={styles.selectionContainer}>
                            <View style={styles.categorySelect}>
                                <Dropdown
                                    baseColor={APP_STYLE_COLOR}
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
            </ScrollView>

        </View>
    )
}