/**
 * Created by zhangfan on 2016/9/28 0028.
 */

import React, {Component} from 'react'
import {
    View,
    ActivityIndicator,
} from 'react-native'

class ActivityIndicatorScene extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#999988"}}>
                <ActivityIndicator
                    style={{backgroundColor:"#FF00FF77", flex:1}}
                    animating={true}
                    color={"#FFFF00"}
                    size={'large'}
                />
            </View>
        )
    }
}

export default ActivityIndicatorScene