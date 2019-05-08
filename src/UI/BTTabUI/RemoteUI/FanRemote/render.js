import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

import { Icon } from 'native-base';
import { styles } from './style';

export const RenderFanRemote = ({
    ongoBack = () => { },
    device_name = "",
    isSwap = false,
    changeSwap= () => {},
    isLevel = 0,
    changeLevel = () => {},
    isOn = false,
    changeOn= () => {}
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

            <View style={styles.remotepanel}>
                <View style={styles.infoContainer}>
                </View>
                <View style={styles.remoteContainer}>
                    <View style={styles.strength} >

                        <TouchableOpacity style={ isLevel !== 2 ? styles.buttonStrength : styles.buttonStrengthOn}
                        onPress = {() => changeLevel(2)}>
                            <Text style = {styles.textLevel}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ isLevel !== 3 ? styles.buttonStrength : styles.buttonStrengthOn}
                        onPress = {() => changeLevel(3)}>
                            <Text style = {styles.textLevel}>3</Text>
                        </TouchableOpacity>



                    </View>

                    <View style={styles.bottomPower}>
                        <TouchableOpacity 
                            style={isLevel !== 1 ? styles.bottomlevelbtn : styles.bottomlevelbtnOn}
                            onPress = {() => changeLevel(1)}>
                            <Text style = {styles.textLevel}>1</Text>
                        </TouchableOpacity>


                        <TouchableOpacity 
                            style={ isOn ? styles.powerBtnOn : styles.powerBtn}
                            onPress = {()=> changeOn()}>
                            <Icon
                                name = "poweroff"
                                type = "AntDesign"
                                style = {styles.iconPower}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={ !isSwap ? styles.bottomlevelbtn : styles.bottomlevelbtnOn}
                            onPress = {() => changeSwap()}>
                            <Icon
                            name =  {isSwap ? "phone-call" : "power"}
                            type = "Feather"
                            style = {styles.iconPower}                    
                            />
                        </TouchableOpacity>
                    </View>


                </View>
            </View>

        </View>
    )
}