/**
 * Created by zhangfan on 2016/9/28 0028.
 */

import React, {Component} from 'react'
import {
    View,
    Alert,
    Text,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native'

class ToastAndroidScene extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#9999AA", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity
                    onPress={()=> {
                        ToastAndroid.show("短时间toast",ToastAndroid.SHORT);
                    }}
                >
                    <Text
                        style={{fontSize: 20}}
                    >短时间toast</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {
                        ToastAndroid.show("长时间toast",ToastAndroid.LONG);
                    }}
                >
                    <Text
                        style={{fontSize: 20}}
                    >长时间toast</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ToastAndroidScene