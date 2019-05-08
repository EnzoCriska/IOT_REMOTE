import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import { styles } from './style';

export const RenderConditioning = ({
    device_name = "",
    ongoBack = () => { },
    mode = "",
    onChangeMode = () => { },
    temp = "",
    upTemp = () => { },
    downTemp = () => { },
    isOn = false,
    onChangePower = () => { }
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
                <View style={styles.info}>
                    <Text style={styles.textinfo}>{`Nhiệt độ phòng:\t ${temp}ºC`}</Text>
                    <Text style={styles.textinfo}>{`Trạng thái thiết bị:\t ${isOn ? "Bật" : "Tắt"}`}</Text>
                </View>
                <View style={styles.remote}>
                    <View style={styles.hafpart}>
                        <View style={styles.hafpart}>
                            <TouchableOpacity
                                onPress={() => onChangeMode("cool")}
                                style={mode === "cool" ? styles.modeOn : styles.modeoff}>
                                <Icon
                                    name="snowflake"
                                    type="MaterialCommunityIcons"
                                    style={styles.modeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.remote}>
                            <View style={styles.hafpart}>
                                <TouchableOpacity
                                    onPress={() => onChangeMode("dry")}
                                    style={mode === "dry" ? styles.bottomleftOn : styles.bottomleft}>
                                    <Icon
                                        name="tint"
                                        type="FontAwesome5"
                                        style={styles.modeIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.hafpart}>
                                <TouchableOpacity
                                    onPress={() => onChangeMode("heat")}
                                    style={mode === "heat" ? styles.bottomleftOn : styles.bottomleft}>
                                    <Icon
                                        name="sun"
                                        type="FontAwesome5"
                                        style={styles.modeIcon}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                    <View style={styles.hafpart}>
                        <TouchableOpacity
                            onPress={() => upTemp()}
                            style={styles.topbtn}>
                            <Icon
                                name="up"
                                type="AntDesign"
                                style={styles.modeIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => downTemp()}
                            style={styles.downBtn}>
                            <Icon
                                name="down"
                                type="AntDesign"
                                style={styles.modeIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        onPress={() => onChangePower()}
                        style={isOn ? styles.powerBtnOn : styles.poweroff}>
                        <Icon
                            name="poweroff"
                            type="AntDesign"
                            style={styles.modeIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}