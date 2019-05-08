import React from 'react'
import {
    View, Text, TouchableOpacity
} from 'react-native';
import { Icon, Switch } from 'native-base';
import { styles } from './style';


export const RenderLock = ({
    device_name = "",
    ongoBack = () => { },
    isLock = false,
    onChangeLock = () => {},
    room = "",
    position = "",
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftHeaderContainer}>
                    <TouchableOpacity
                        onPress={() => ongoBack()}>
                        <Icon
                            type="FontAwesome"
                            name="long-arrow-left"
                            style={styles.qrIconStyle}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rightHeaderContainer}>
                    <TouchableOpacity
                    >

                    </TouchableOpacity>
                </View>

                <View style={styles.midHeaderContainer}><Text style={styles.textTitle}>{device_name}</Text></View>

            </View>

            <View style={styles.remotePanel}>
                <View style = {styles.info}>
                    <Text style = {styles.textInfo}>{room}</Text>
                    <Text style = {styles.textInfo}>Khóa số: {position}</Text>
                </View>

                <TouchableOpacity
                    onPress= {() => onChangeLock()}>
                    <Icon
                        name={isLock ? "lock" : "unlock"}
                        type="EvilIcons"
                        style={styles.iconLockStyle}
                    />
                </TouchableOpacity>
                <Text>Chạm vào biểu tượng để {isLock ? "mở khóa" : "Khóa"}</Text>

            </View>
        </View>
    )
}