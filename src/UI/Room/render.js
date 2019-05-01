import React from 'react';
import {
    View, Text, Image, TouchableOpacity, FlatList,RefreshControl
} from 'react-native';
import { styles } from './style';
import { Icon } from 'native-base';


export const RenderRoom = ({
    devices = [],
    goToDevice = () => { },
    deleteDevice = () => {},
    isReload = false,
    onReloadDevices = () => {}
}) => {
    return (
        <View style={styles.container}>
            {devices.length === 0 ? <Text>Nothing</Text> :
                <FlatList
                    style={styles.flatlist}
                    data={devices}
                    refreshControl={
                        <RefreshControl
                            refreshing={isReload}
                            onRefresh={() => onReloadDevices()}
                        />
                    }
                    numColumns={3}
                    keyExtractor={(item, index) => item.toString() + index}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => goToDevice(item)}
                                onLongPress = {() => deleteDevice(item)}>
                                <View style={item.status === "on" ? styles.itemContainerON : styles.itemContainerOFF}>
                                    <Icon
                                        name = {item.metadata.type === "Quạt" ? "galactic-republic" :
                                        item.metadata.type === "Đèn"  ? "lightbulb" : 
                                        item.metadata.type === "Điều hòa"? "band-aid" :  
                                        item.metadata.type === "Khóa cửa" ? "lock" : 
                                        item.metadata.type === "Ổ cắm" ? "plug" : ""}
                                        type = "FontAwesome5"
                                        style ={styles.iconItemStyle}
                                    />
                                    <Text style = {styles.textItemName}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            }
        </View>
    )
}
