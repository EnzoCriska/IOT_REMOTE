import React from 'react';
import {
    View, Text, Image, TouchableOpacity, FlatList
} from 'react-native';
import { styles } from './style';


export const RenderRoom = ({
    devices = [],
    goToDevice = () => { }
}) => {
    console.log(devices)
    return (
        <View style={styles.container}>
            {devices.length === 0 ? <Text>Nothing</Text> :
                <FlatList
                    style={styles.flatlist}
                    data={devices}
                    numColumns={4}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => goToDevice(item)}>
                                <View style={item.status === "on" ? styles.itemContainerON : styles.itemContainerOFF}>
                                    <Text>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            }
        </View>
    )
}