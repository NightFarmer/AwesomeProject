/**
 * Created by zhangfan on 2016/9/27 0027.
 */

import React, {Component} from "react"
import {
    View,
    Text
} from 'react-native'

class MyScene2 extends Component {

    static defaultProps = {
        title: 'MyScene~~~~~'
    };

    // getDefaultProps() {
    //     return {
    //         title: 'MyScene'
    //     };
    // }

    render() {
        return (
            <View style={{flex: 1, backgroundColor:"#778899"}}>
                <Text>Hi, My name is {this.props.title}</Text>
            </View>
        )
    }
}

export default MyScene2