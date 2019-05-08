import React from 'react'
import {
    View, Text, TouchableOpacity
} from 'react-native';

import { styles } from './style';
import { TextInput, } from 'react-native-gesture-handler';
import { COLORS, APP_STYLE_COLOR } from '../../../util/app_style_containt/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { STRINGS } from '../../../util/value_containt/strings';
import LogoApp from '../../../component/LogoApp';



export const RenderLogin = ({
    email = "",
    onChangeEmail = () => { },
    password = "",
    onChangePass = () => {},

    onRegister = ()=>  {},
    onLogin = () => {}
}) => {
    return (
        <View style={styles.container}>

            <LogoApp/>

            <View style={styles.formInputContainer}>

                <View style={styles.inputContainer}>
                    <Icon name="envelope" color={APP_STYLE_COLOR} size={25} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => onChangeEmail(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" color={APP_STYLE_COLOR} size={25} />
                    <TextInput
                        style={styles.textInput}
                        placeholder={STRINGS.PASSWORD_VI_LLC}
                        value={password}
                        onChangeText={(text) => onChangePass(text)}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.bottonContainer}>
                    <TouchableOpacity
                        onPress={() => onRegister()}
                        style={styles.register}>
                        <Text style={styles.textRegister}>Đăng ký</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => onLogin()}
                        style={styles.login}>
                        <Text style={styles.textButton}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}