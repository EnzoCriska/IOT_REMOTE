import React from 'react';
import {
    View, Text, Image, TouchableOpacity, Switch, ScrollView, FlatList, ActivityIndicator, RefreshControl
} from 'react-native';
import { styles } from './style';
import { Icon } from 'native-base';

export const RenderBLEScan = ({
    state = {},
    isRefreshing = false,
    onRefresh = () => {},
    connected = false,
    device = {},
    isEnabled = false,
    toggleBluetooth = () => { },
    onGoBack = () => { },
    devices = [],
    unpairedDevices = [],
    discovering = false,
    onPairToDevices = () => { },

    onConnectDevice = () => { }
}) => {

    const switchKey = { false: "red", true: "green" }
    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftHeaderContainer}>
                    <TouchableOpacity style={styles.backContainer}
                        onPress={() => onGoBack()}>
                        <Icon
                            type="FontAwesome"
                            name="long-arrow-left"
                            style={styles.backArrowIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rightHeaderContainer}>
                    <Switch
                        onValueChange={(value) => toggleBluetooth(value)}
                        value={isEnabled}
                        trackColor={switchKey}
                        thumbColor="pink"
                    />
                </View>

                <View style={styles.midHeaderContainer}><Text style={styles.textTitle}>Thêm thiết bị</Text></View>

            </View>

            {
                connected ?
                    <View style={styles.deviceConnect}>
                        <Text style={styles.connectedText}>{device.name ? device.name === "" ? device.id : device.name : device.id}</Text>
                    </View> :
                    <View></View>
            }

            {
                isEnabled ?
                    <ScrollView style={styles.bodyContainer} contentContainerStyle={{ alignItems: 'center' }}>

                        <View style={styles.cardView}>
                            <Text style={styles.textBodySeg}>Thiết bị đã ghép nối</Text>

                            {devices.length > 0 ?
                                <FlatList
                                    data={devices}
                                    extraData ={state}
                                    keyExtractor={(item, index) => item.id.toString() + index}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            onPress={() => onConnectDevice(item)}>
                                            <View style={styles.itemDivecesContainer}>
                                                <View style={styles.leftItem}>
                                                    <Icon
                                                        type="FontAwesome"
                                                        name="bluetooth-b"
                                                        style={styles.iconBle}
                                                    />
                                                </View>
                                                <View style={styles.rightItem}>
                                                    <Text>{item.name ? item.name === "" ? item.id : item.name : item.id}</Text>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    )
                                    } />
                                : <Text style={styles.textNothing}>Không có thiết bị nào được ghép nối</Text>
                            }
                        </View>

                        <View style={styles.cardView}>
                            <Text style={styles.textBodySeg}>Thiết bị sẵn có</Text>

                            {discovering ?
                                <View>
                                    <ActivityIndicator size="small" color="green" />
                                </View> :
                                unpairedDevices.length > 0 ?
                                    <FlatList
                                        data={unpairedDevices}
                                        extraData= {state}
                                        keyExtractor={(item, index) => item.id.toString() + index}
                                        refreshControl={
                                            <RefreshControl
                                              refreshing={isRefreshing}
                                              onRefresh={() => onRefresh()}
                                            />
                                          }
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                onPress={() => onPairToDevices(item)}>
                                                <View style={styles.itemDivecesContainer}>
                                                    <View style={styles.leftItem}>
                                                        <Icon
                                                            type="FontAwesome"
                                                            name="bluetooth-b"
                                                            style={styles.iconBle}
                                                        />
                                                    </View>
                                                    <View style={styles.rightItem}>
                                                        <Text>{item.name ? item.name === "" ? item.id : item.name : item.id}</Text>
                                                    </View>

                                                </View>
                                            </TouchableOpacity>
                                        )}
                                    />
                                    : <Text style={styles.textNothing}>Nothing</Text>
                            }
                        </View>

                    </ScrollView> :
                    <View style={styles.bleDisableView}>
                        <Text style={styles.textNothing}>Bluetooth không được bật!</Text>
                    </View>
            }
        </View>
    )
}