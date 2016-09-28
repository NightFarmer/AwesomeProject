/**
 * Created by zhangfan on 2016/9/28 0028.
 */

import React, {Component} from 'react'
import {
    View,
    Alert,
    Text,
    TouchableOpacity,
} from 'react-native'

class AlertScene extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#9999AA", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity
                    onPress={()=> {
                        Alert.alert("标题", "内容")
                    }}
                >
                    <Text
                        style={{fontSize: 20}}
                    >普通提示</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {
                        Alert.alert("标题", "内容", [{
                            text: "按钮1",
                            onPress: ()=> {

                            }
                        }, {
                            text: "按钮2",
                            onPress: ()=> {

                            }
                        }])
                    }}
                >
                    <Text
                        style={{fontSize: 20}}
                    >两个按钮的</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {
                        Alert.alert("标题", "内容",
                            'ABC'.split('').map((dot, index) => ({
                                text: 'Button ' + index + dot,
                                onPress: () => console.log('Pressed ' + index)
                            })))
                    }}
                >
                    <Text
                        style={{fontSize: 20}}
                    >三个按钮的</Text>
                </TouchableOpacity>

                <Text>最多三个按钮</Text>
            </View>
        )
    }
}

export default AlertScene