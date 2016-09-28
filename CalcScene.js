/**
 * Created by zhangfan on 2016/9/27 0027.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

const calcStyle = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        backgroundColor: "#0E91D3",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 45
    },
    console: {
        padding: 10,
        fontSize: 45,
        color: "#0E91D3",
        textAlign: "right",
    },
    topBar: {
        padding: 10,
        backgroundColor: "#0E91D3",
        fontSize: 30,
        color: "#FFFFFF",
        textAlign: "center"
    }
});

class CalcButton extends Component {
    render() {
        return (
            <TouchableOpacity style={calcStyle.button} onPress={this.props.onPress}>
                <Text style={calcStyle.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

import BackAndroidHelper from './BackAndroidHelper'

class CalcScene extends Component {

    num1 = 0;
    num2 = 0;
    result = 0;
    calcFun = null;

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            console: 0,
        };
        BackAndroidHelper.handle(this, ()=> {
            return false
        })
    }

    /**
     * 加
     */
    add() {
        this.result = this.num1 + this.num2;
    }

    /**
     * 减
     */
    subtract() {
        this.result = this.num1 - this.num2;
    }

    /**
     * 乘
     */
    multiply() {
        this.result = this.num1 * this.num2;
    }

    /**
     * 除
     */
    divide() {
        this.result = this.num1 / this.num2;
    }

    /**
     * 设置操作符
     */
    calc(func) {
        if (this.calcFun != null && this.num2 != 0) {
            this.calcResult()
        }
        if (this.result != 0) {
            this.num1 = this.result;
        }
        this.calcFun = func
    }

    calcResult() {
        if (this.calcFun) {
            this.calcFun();
            this.setState({
                console: this.result
            });
            this.calcFun = null;
            this.num1 = 0;
            this.num2 = 0;
        }
    }

    /**
     * 清除
     */
    clear() {
        this.num1 = 0;
        this.num2 = 0;
        this.result = 0;
        this.calcFun = null;
        this.setState({
            console: 0
        })
    }

    inputNum(num) {
        let newNum = 0;
        if (this.calcFun) {
            newNum = parseInt(this.num2.toString() + num);
            this.num2 = newNum;
        } else {
            newNum = parseInt(this.num1.toString() + num);
            this.num1 = newNum;
            this.result = 0;
        }
        this.setState({
            console: newNum
        })
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#FFFFFF"}}>
                <Text style={calcStyle.topBar}>RN计算器</Text>
                <Text style={calcStyle.console}>{this.state.console}</Text>
                <View style={{flexDirection: 'row'}}>
                    <CalcButton text="C" onPress={()=>this.clear()}/>
                    <CalcButton text="*" onPress={()=>this.calc(this.multiply)}/>
                    <CalcButton text="/" onPress={()=>this.calc(this.divide)}/>
                    <CalcButton text="+" onPress={()=>this.calc(this.add)}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <CalcButton text="7" onPress={()=>this.inputNum(7)}/>
                    <CalcButton text="8" onPress={()=>this.inputNum(8)}/>
                    <CalcButton text="9" onPress={()=>this.inputNum(9)}/>
                    <CalcButton text="-" onPress={()=>this.calc(this.subtract)}/>
                </View>
                <View style={{flexDirection: 'row'} }>
                    <CalcButton text="4" onPress={()=>this.inputNum(4)}/>
                    <CalcButton text="5" onPress={()=>this.inputNum(5)}/>
                    <CalcButton text="6" onPress={()=>this.inputNum(6)}/>
                    <CalcButton text="0" onPress={()=>this.inputNum(0)}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <CalcButton text="1" onPress={()=>this.inputNum(1)}/>
                    <CalcButton text="2" onPress={()=>this.inputNum(2)}/>
                    <CalcButton text="3" onPress={()=>this.inputNum(3)}/>
                    <CalcButton text="=" onPress={()=>this.calcResult()}/>
                </View>
            </View>
        )
    }
}

export default CalcScene