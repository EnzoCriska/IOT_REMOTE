import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale_point } from '../util/value_containt/constaint';
import { COLORS } from '../util/app_style_containt/style';

export default class LogoApp extends Component {
    render() {
        return (
            <View style={{ marginTop: 80 * scale_point}}>
                <Icon
                    style={{ position: 'absolute', alignSelf:"flex-end", marginTop: -30 * scale_point}}
                    name="feed"
                    color={COLORS.WHITE}
                    size={50} />
                <Icon
                    style={{ }}
                    name="university"
                    color={COLORS.WHITE}
                    size={150} />

            </View>
        )
    }
}
