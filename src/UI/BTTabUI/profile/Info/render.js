import React from 'react';
import { Avatar } from '../../../../component/Avatar';
import {

    TouchableOpacity, View, Text
} from 'react-native';

export const RenderInfo = ({
    onToLogout = () => {},
    user_name = ""
}) => {
    return (
        <View style = {{flex:1,justifyContent: 'center', alignItems: 'center',}}>

        <Avatar
         source = ""
         size = {100}

        />

            <Text>{user_name}</Text>
            <TouchableOpacity 
            onPress = {() => onToLogout()}
            style={{ width: 200, height: 35, backgroundColor: "green", justifyContent: 'center', alignItems: 'center' }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}