/**
 * Created by zhangfan on 2016/9/28 0028.
 */

import React, {Component} from 'react'
import {
    DrawerLayoutAndroid,
    View,
    Text,
} from 'react-native'

class DrawerLayoutAndroidScene extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            stateInfo: "Hello~",
            changeInfo: ""
        };
    }

    render() {
        return (
            <DrawerLayoutAndroid
                style={{flex: 1, backgroundColor: "#9999AA"}}
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() =>
                    <View>
                        <Text>yooo</Text>
                    </View>
                }
                onDrawerOpen={()=> {
                    this.setState({stateInfo: "onDrawerOpen"})
                }}
                onDrawerClose={()=> {
                    this.setState({stateInfo: "onDrawerClose"})
                }}
                onDrawerSlide={()=> {
                    this.setState({stateInfo: "onDrawerSlide"})
                }}
                onDrawerStateChanged={(param)=> {
                    this.setState({changeInfo: param})
                }}
            >
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 15}}>{this.state.stateInfo}</Text>
                    <Text style={{fontSize: 15}}>{this.state.changeInfo}</Text>
                    <Text style={{fontSize: 15}}>左边侧滑拉出界面</Text>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

export default DrawerLayoutAndroidScene