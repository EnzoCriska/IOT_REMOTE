import React from 'react'
import { 
    View, Text, Image, TouchableOpacity, StyleSheet
 } from 'react-native';
// import { AVATAR_DEFAULT_IMG } from '../Common/Image';
const AVATAR_DEFAULT_IMG = require("../media/ic_avatar_default.png")



 export const Avatar = ({
    source = '',
    size = 0,
    onPress = () => {}
 }) => {
     const styles = StyleSheet.create({
        container:{
            width: size+1,
            height: size+1,
            borderRadius: size/2,
            
        },
        imageStyle:{
            width: size,
            height: size,
            borderRadius: size/2,
            borderWidth: 1,
            borderColor: '#fff',
        }
     })


     let img = source === "" ? 
        <Image
            source = {AVATAR_DEFAULT_IMG}
            style = {styles.imageStyle}
        />
    :
        <Image
            source = {{uri:source}}
            style = {styles.imageStyle}
        />


     return (
         <TouchableOpacity 
            style = {styles.container}
            onPress = {() => onPress()}>
            {img}
         
         </TouchableOpacity>
     )
 }