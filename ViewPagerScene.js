/**
 * Created by zhangfan on 2016/9/28 0028.
 */

import React, {Component} from 'react'

import {
    View,
    Text,
    ViewPagerAndroid
} from 'react-native'

class ViewPagerScene extends Component {

    render() {
        return (
            <ViewPagerAndroid
                style={{flex: 1,backgroundColor:"#FFFFFF"}}>
                <View >
                    <Text style={{backgroundColor: "#998877"}}>First page</Text>
                </View>
                <View>
                    <Text>Second page</Text>
                </View>
                <View style={{flex: 1, backgroundColor: "#ff0000"}}>
                    <Text>hehehe</Text>

                </View>
            </ViewPagerAndroid>
        )
    }
}


export default ViewPagerScene