import React from 'react'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Splash from './splashScreen';
import Login from './provisioning/login';
import Register from './provisioning/register';
import Home from './Home';
import { TabBottom } from './BTTabUI/bottomTabBar';


const main_stack = createStackNavigator({
    splash: Splash,
    login: Login,
    register: Register,
    home: TabBottom
    
},{
    headerMode: "none"
})

const MainApp = createAppContainer(main_stack)
export default MainApp;