import React, { Component } from 'react'
import { Text, View } from 'react-native'


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
import { COLORS, APP_STYLE_COLOR } from '../util/app_style_containt/style';
export default class LoadingComp extends Component {
    render() {
        let ArrInd = [
            <BallIndicator color={COLORS.WHITE} />,
            <BarIndicator color={COLORS.WHITE} />,
            <DotIndicator color={COLORS.WHITE} />,
            <MaterialIndicator color={COLORS.WHITE} />,
            <PacmanIndicator color={COLORS.WHITE} />,
            <PulseIndicator color={COLORS.WHITE} />,
            <SkypeIndicator color={COLORS.WHITE} />,
            <UIActivityIndicator color={COLORS.WHITE} />,
            <WaveIndicator color={COLORS.WHITE} />
        ]
        return (
            <View style={{ flex: 1, backgroundColor: APP_STYLE_COLOR, justifyContent: 'center', alignItems: 'center' }}>
                {ArrInd[Math.floor(Math.random() * 9)]}
             <Text style={{color: "#fff"}}>Loading...</Text>
            </View>
        )
    }
}
