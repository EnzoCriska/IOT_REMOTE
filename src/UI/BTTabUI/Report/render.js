import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Iframe from 'react-iframe';
import { width } from '../../../util/value_containt/constaint';

import { PieChart, LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts';
import { styles } from './style';

export const RenderReport = ({
    data = {},
    setLabelWidth = () => { },
    labelWidth = "",
    label = "",
    value = "",
    time_user = [],
}) => {
    const deviceWidth = width
    return (
        <ScrollView style={{ flex: 1, padding: 10 }}>

            <View style={styles.pieDevice}>
                <Text style={styles.titleText}>Biểu đồ tỷ lệ thiết bị</Text>

                <PieChart
                    style={{ height: 300, marginTop: -20 }}
                    outerRadius={'100%'}
                    innerRadius={'35%'}
                    data={data}
                />
                <Text
                    onLayout={({ nativeEvent: { layout: { width } } }) => setLabelWidth(width)}

                    style={{
                        position: 'absolute',
                        color: "#fff",
                        fontSize: 18,
                        left: deviceWidth / 2 - labelWidth / 2 - 10,
                        top: 150,
                        textAlign: 'center',
                    }}>
                    {`${label} \n ${Math.ceil(value * 100 / (data.length))} %`}
                </Text>

            </View>
            {console.log(time_user)}
            <View style={styles.pieDevice}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <YAxis
                        data={time_user}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={value => `${value}h`}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={time_user}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={{ top: 10, bottom: 10 }}
                    >
                        <Grid />
                    </LineChart>
                </View>
                <XAxis
                    style={{ marginLeft: 25 }}
                    data={time_user}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />

            </View>
        </ScrollView>
    )
}