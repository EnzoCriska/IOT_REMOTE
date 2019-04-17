import React from 'react';

import { createStackNavigator } from "react-navigation";
import Info from './Info/index';


export const ProfileStack = createStackNavigator({
    info: Info
}, {
    headerMode: "none"
})