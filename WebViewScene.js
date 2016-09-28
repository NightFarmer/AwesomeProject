/**
 * Created by zhangfan on 2016/9/28 0028.
 */

import React, {Component} from 'react'
import {
    View,
    Alert,
    Text,
    WebView,
    TouchableOpacity,
} from 'react-native'

class WebViewScene extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            mySource: {
                uri: "http://www.baidu.com"
            }
        };
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#9999AA", alignItems: "stretch"}}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity
                        onPress={()=> {
                            this.setState({
                                mySource: {
                                    uri: "http://www.baidu.com"
                                }
                            })
                        }}
                    >
                        <Text
                            style={{fontSize: 20}}
                        >百度URL </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> {
                            this.setState({
                                mySource: {
                                    html: `<HTML>文本格式的html字符串</HTML>`
                                }
                            })
                        }}
                    >
                        <Text
                            style={{fontSize: 20}}
                        >加载文本 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> {
                            this.setState({
                                mySource: require("./WebViewTestFile.html")
                            })
                        }}
                    >
                        <Text
                            style={{fontSize: 20}}
                        >加载HTMl文件</Text>
                    </TouchableOpacity>
                </View>
                <Text>还有一些特性没有展示</Text>
                <WebView
                    style={{
                        flex: 1, backgroundColor: "#ff8888",
                    }}
                    source={this.state.mySource}
                />
            </View>
        )
    }
}

export default WebViewScene