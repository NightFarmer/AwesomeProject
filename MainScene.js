/**
 * Created by zhangfan on 2016/9/28 0028.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    ToastAndroid,
    BackAndroid,
} from 'react-native'

import ViewPagerScene from './ViewPagerScene'
import CalcScene from './CalcScene'
import ActivityIndicatorScene from './ActivityIndicatorScene'
import AlertScene from './AlertScene'
import ToastAndroidScene from './ToastAndroidScene'
import WebViewScene from './WebViewScene'
import DrawerLayoutAndroidScene from './DrawerLayoutAndroidScene'

class RowItem extends Component {

    render() {
        return (
            <TouchableOpacity
                onPress={()=>this.props.context.props.navigator.push({
                    component: this.props.scene
                })}
            >
                <Text style={{backgroundColor: "#FF0000", fontSize:25}}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

import BackAndroidHelper from './BackAndroidHelper'
class MainScene extends Component {

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: "#FFFFFF"}}>
                <RowItem name="ActivityIndicator示例" context={this} scene={ActivityIndicatorScene}/>
                <RowItem name="ViewPager示例" context={this} scene={ViewPagerScene}/>
                <RowItem name="Alert示例" context={this} scene={AlertScene}/>
                <RowItem name="ToastAndroid示例" context={this} scene={ToastAndroidScene}/>
                <RowItem name="WebView示例" context={this} scene={WebViewScene}/>
                <RowItem name="DrawerLayoutAndroid示例" context={this} scene={DrawerLayoutAndroidScene}/>
                <RowItem name="计算器" context={this} scene={CalcScene}/>
            </View>
        )
    }

    componentWillMount() {
        BackAndroidHelper.register(this.props.navigator)
    }

    componentWillUnmount() {
        BackAndroidHelper.unRegister()
    }


}

export default MainScene