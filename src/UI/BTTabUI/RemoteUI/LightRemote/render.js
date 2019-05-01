import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { styles } from './style';
import { Icon } from 'native-base';
import { ColorWheel } from 'react-native-color-wheel';
import Slider from "react-native-slider";

export const RenderLightRemote = ({
    ongoBack = () => { },
    device_name = "",
    onChangePoweoff = () => {},
    isOn = false,
    onChangeColor = () => { },
    onChangeValue = () => { },
    light_value = "",
    valueColor = ""
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


            <View style={styles.bodyRemote}>

                <View style = {styles.powerContainer}>
                    <TouchableOpacity
                        style = {styles.poweroffBtn}
                        onPress = {() => onChangePoweoff()}>
                        <Icon
                            name = "power-off"
                            type = "FontAwesome"
                            style = {styles.iconPoweroffStyle}/>
                    </TouchableOpacity>
                    
                    <View style = {styles.iconLightContainer}>
                        <Icon
                        name = "lightbulb-on"
                        type = "MaterialCommunityIcons"
                        style = {{fontSize: 40, color: isOn? "#fff444" : "#4c4c47"}}
                        />
                    </View>
                </View>


                <View style={styles.colorPickerContainer}>
                    <ColorWheel
                        initialColor={valueColor}
                        onColorChange={color => console.log({ color })}
                        onColorChangeComplete={color => onChangeColor(color)}
                        style={styles.colorPicker}
                        thumbStyle={styles.thumStylePicker}
                        thumbSize={30}
                    />
                </View>


                <View style={styles.sliderContainer}>
                    <View style = {styles.outContainer}>
                        <Icon
                            name= "light-down"
                            type = "Entypo"
                            style={{fontSize: 30, color: valueColor}}
                            />
                    </View>
                    <View style={styles.midContainer}>
                        <Slider
                            minimumTrackTintColor={valueColor}
                            maximumTrackTintColor="#0e0033"
                            thumbTintColor={valueColor}
                            trackStyle={styles.trackStyle}
                            value={light_value}
                            onSlidingComplete={(value) => onChangeValue(value)}
                        // onValueChange={(value) => onChangeValue(value)}
                        />
                    </View>
                    <View style = {styles.outContainer}>
                        <Icon
                            name= "light-up"
                            type = "Entypo"
                            style={{fontSize: 30, color: valueColor}}
                            />
                    </View>

                </View>


            </View>




        </View>
    )
}