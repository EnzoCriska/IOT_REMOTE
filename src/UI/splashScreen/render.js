import React from 'react'
import {
    View, Image, Text, ActivityIndicator
} from 'react-native';
import { styles } from './style';

import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../util/app_style_containt/style';
import { STRINGS } from '../../util/value_containt/strings';

import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
import LogoApp from '../../component/LogoApp';


export const RenderSplash = ({

}) => {
    let ArrInd = [
        <BallIndicator color = {COLORS.WHITE}/>, 
        <BarIndicator color = {COLORS.WHITE}/>, 
        <DotIndicator color = {COLORS.WHITE}/>, 
        <MaterialIndicator color = {COLORS.WHITE}/>, 
        <PacmanIndicator color = {COLORS.WHITE}/>, 
        <PulseIndicator color = {COLORS.WHITE}/>, 
        <SkypeIndicator color = {COLORS.WHITE}/>, 
        <UIActivityIndicator color = {COLORS.WHITE}/>, 
        <WaveIndicator color = {COLORS.WHITE}/>
    ]

    return (
        <View style={styles.container}>

            <LogoApp/>

            <Text style={styles.appname}>{STRINGS.APP_NAME_UPL}</Text>

            <Text style={styles.appslogan}>{STRINGS.APP_SLOGAN_LLC}</Text>

            <View style = {styles.loading}>
                {ArrInd[Math.floor(Math.random()*9)]}
                <Text style = {styles.appslogan}>Loading...</Text>
            </View>
        </View>
    )
}