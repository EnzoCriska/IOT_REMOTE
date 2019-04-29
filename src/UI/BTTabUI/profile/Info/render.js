import React from 'react';
import {
    TouchableOpacity, View, Text
} from 'react-native';

export const RenderInfo = ({
    onToLogout = () => {}
}) => {
    return (
        <View>
            <TouchableOpacity 
            onPress = {() => onToLogout()}
            style={{ width: 200, height: 35, backgroundColor: "green", justifyContent: 'center', alignItems: 'center' }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}