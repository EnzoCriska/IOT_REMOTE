import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../Home/index';
import { ProfileStack } from './profile/profileStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { APP_STYLE_COLOR, COLORS } from '../../util/app_style_containt/style';
import AddDevices from './addDevices/index';
import Report from './Report/index';
import SmartScenario from './SmartScenario/index';
import BLEScan from './BLEScan';
import LightRemote from './RemoteUI/LightRemote';
import Login from '../provisioning/login/index';

const ADD = createStackNavigator({
    addDevice: AddDevices,
    bleScan: BLEScan,
}, {
    headerMode: 'none'
});

ADD.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    var stack = navigation.state.routes

    if (stack[stack.length -1].routeName != 'addDevice') {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};


const HomeStack = createStackNavigator({
    home: Home,
    light: LightRemote,
    login: Login
}, {headerMode:'none'})

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    var stack = navigation.state.routes

    if (stack[stack.length -1].routeName != 'home') {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
}

export const TabBottom = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return focused ?
                    <Icon
                        name="home"
                        size={30}
                        color={COLORS.BOTTONTAB_ICON_ACTIVE}
                    /> :
                    <Icon
                        name="home"
                        size={25}
                        color={COLORS.BOTTONTAB_ICON_UNACTIVE}
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: COLORS.BOTTONTAB_ICON_ACTIVE } : { color: COLORS.BOTTONTAB_ICON_UNACTIVE }}>Trang chủ</Text>
                </View>
            }
        })
    },

    Report: {
        screen: Report,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return focused ?
                    <Icon
                        name="pie-chart"
                        size={30}
                        color={COLORS.BOTTONTAB_ICON_ACTIVE}
                    /> :
                    <Icon
                        name="pie-chart"
                        size={25}
                        color={COLORS.BOTTONTAB_ICON_UNACTIVE}
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: COLORS.BOTTONTAB_ICON_ACTIVE } : { color: COLORS.BOTTONTAB_ICON_UNACTIVE }}>Đánh giá</Text>
                </View>
            }
        })

    },
    AddDevice: {
        screen: ADD,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return focused ?
                    <Icon
                        name="plus-circle"
                        size={60}
                        color={COLORS.BOTTONTAB_ICON_ACTIVE}
                    /> :
                    <Icon
                        name="plus-circle"
                        size={50}
                        color={COLORS.BOTTONTAB_ICON_UNACTIVE}
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: COLORS.BOTTONTAB_ICON_ACTIVE } : { color: COLORS.BOTTONTAB_ICON_UNACTIVE }}></Text>
                </View>

            }
        })
    },

    SmartScenario: {
        screen: SmartScenario,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return focused ?
                    <Icon
                        name="codepen"
                        size={30}
                        color={COLORS.BOTTONTAB_ICON_ACTIVE}
                    /> :
                    <Icon
                        name="codepen"
                        size={25}
                        color={COLORS.BOTTONTAB_ICON_UNACTIVE}
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: COLORS.BOTTONTAB_ICON_ACTIVE} : { color: COLORS.BOTTONTAB_ICON_UNACTIVE}}>Kịch bản</Text>
                </View>

            }
        })
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return focused ?
                    <Icon
                        name="user-circle-o"
                        size={30}
                        color={COLORS.BOTTONTAB_ICON_ACTIVE}
                    /> :
                    <Icon
                        name="user-circle-o"
                        size={25}
                        color={COLORS.BOTTONTAB_ICON_UNACTIVE}
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: COLORS.BOTTONTAB_ICON_ACTIVE } : { color: COLORS.BOTTONTAB_ICON_UNACTIVE}}>Tài khoản</Text>
                </View>

            }
        })
    },
},
    {
        tabBarOptions: {
            showIcon: true,
            style: {
                backgroundColor: APP_STYLE_COLOR,
                height: 60
                // backgroundColor: 'transparent'
            },
            labelStyle: {
                color: '#fff'
            }
        },
    })