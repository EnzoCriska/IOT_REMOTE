import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground
 } from 'react-native';
import { styles } from './style';
import { Icon } from 'native-base';


 export const RenderLightRemote = ({
    ongoBack = () => {},
    device_name = ""
 }) => {
     return (
         <View style = {styles.container}>


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

         </View>
     )
 }