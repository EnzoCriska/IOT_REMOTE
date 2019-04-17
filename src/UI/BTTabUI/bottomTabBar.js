import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../Home/index';
import { ProfileStack } from './profile/profileStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { APP_STYLE_COLOR } from '../../util/app_style_containt/style';
import AddDevices from './addDevices/index';
import Report from './Report/index';
import SmartScenario from './SmartScenario/index';
import BLEScan from './BLEScan';

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


export const TabBottom = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return focused ?
                    <Icon
                        name="home"
                        size={30}
                        color="red"
                    /> :
                    <Icon
                        name="home"
                        size={25}
                        color="grey"
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: "red" } : { color: "grey" }}>Trang chủ</Text>
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
                        color="red"
                    /> :
                    <Icon
                        name="pie-chart"
                        size={25}
                        color="grey"
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: "red" } : { color: "grey" }}>Đánh giá</Text>
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
                        color="red"
                    /> :
                    <Icon
                        name="plus-circle"
                        size={50}
                        color="grey"
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: "red" } : { color: "grey" }}></Text>
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
                        color="red"
                    /> :
                    <Icon
                        name="codepen"
                        size={25}
                        color="grey"
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: "red" } : { color: "grey" }}>Kịch bản</Text>
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
                        color="red"
                    /> :
                    <Icon
                        name="user-circle-o"
                        size={25}
                        color="grey"
                    />
            },
            tabBarLabel: ({ focused }) => {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={focused ? { color: "red" } : { color: "grey" }}>Tài khoản</Text>
                </View>

            }
        })
    },
},
    {
        tabBarOptions: {
            showIcon: true,
            style: {
                // backgroundColor: "#0081FF",
                backgroundColor: 'transparent'
            },
            labelStyle: {
                color: '#fff'
            }
        },
    })