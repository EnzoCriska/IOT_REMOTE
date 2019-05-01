import React from 'react';

import { styles } from './style';
import {
    View, Text, Image, ActivityIndicator
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import { APP_STYLE_COLOR } from '../../util/app_style_containt/style';
import Room from '../Room';

export const RenderHome = ({
    navigation = {},
    country = '',
    forecast = "",
    rooms = [],
    onReloadDevices = () => {}
}) => {
    return (
        <View style={styles.container}>


            <View style={styles.weatherContainer}>

                {
                    forecast === "" ?
                        <ActivityIndicator color="green" size="small" /> :

                        <View style={{ flex: 1 }}>
                            <View style={styles.showWeather}>
                                <Image
                                    source={{ uri: `http://openweathermap.org/img/w/${forecast.icon}.png` }}
                                    style={styles.iconweather} />
                                <Text style={styles.textCountry}>{country.city} - {country.country}</Text>
                            </View>
                            <View style={styles.showWeather}>
                                <Text style={styles.textWeather}>Nhiệt độ: {forecast.temp}</Text>
                                <Text style={styles.textWeather}>Thời tiết: {forecast.main}</Text>
                                <Text style={styles.textWeather}>Mô tả: {forecast.description}</Text>
                            </View>
                        </View>
                }
            </View>

            <View style={styles.bodyContainer}>

                <ScrollableTabView
                    tabBarActiveTextColor={APP_STYLE_COLOR}
                    tabBarInactiveTextColor={APP_STYLE_COLOR}
                    renderTabBar={() => <TabBar underlineColor={APP_STYLE_COLOR} />}>

                    {rooms.map(item => (
                        <Room
                            navigation={navigation}
                            key={JSON.stringify(item)}
                            tabLabel={{ label: item.name }}
                            label={item.name}
                            id={item.id}
                            onReloadDevices = {() => onReloadDevices()}
                        />
                    ))}


                </ScrollableTabView>

            </View>
        </View>
    )
}