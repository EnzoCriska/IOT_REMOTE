import React from 'react';
import { Avatar } from '../../../../component/Avatar';
import {
    TouchableOpacity, View, Text, Linking
} from 'react-native';
import { styles } from './style';
import { Icon } from 'native-base';

export const RenderInfo = ({
    onToLogout = () => { },
    user_name = ""
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.avatarStyle}>
                <Avatar
                    source=""
                    size={100}
                />
            </View>

            <Text style={styles.userNameStyle}>{user_name}</Text>
            <TouchableOpacity
                onPress={() => onToLogout()}
                style={styles.containerLogout}>
                <Icon
                    name="logout-variant"
                    type="MaterialCommunityIcons"
                    style={styles.iconLogout}
                />
                <Text style={styles.textLogout}>Đăng xuất</Text>
            </TouchableOpacity>

            <View style={styles.copyrightContainer}>
                <Text style={styles.copytext}>Copyright &copy; 2019</Text>
                <Text
                    style={styles.uetext}
                    onPress = {() => Linking.openURL('https://uet.vnu.edu.vn/')}
                >
                    University of Engineering and Technology

                </Text>
                <Text 
                style={styles.vnutext}
                onPress = {() => Linking.openURL('https://vnu.edu.vn/')}
                >VIET NAM NATIONAL UNIVERSITY, HA NOI</Text>
            </View>
        </View>
    )
}