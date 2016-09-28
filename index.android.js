import React, {Component, PropTypes} from 'react'
import {
    AppRegistry,
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    ListView,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    Platform,
    BackAndroid,
    ToastAndroid,
} from 'react-native'

class SimpleNavigationApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title: 'My Initial Scene', index: 0}}

                renderScene={(route, navigator) =>
                    <MyScene
                        title={route.title}

                        // Function to call when a new scene should be displayed
                        onForward={ () => {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene ' + nextIndex,
                                index: nextIndex,
                            });
                        }}

                        // Function to call to go back to the previous scene
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        )
    }
}


class SimpleNavigationDemo extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    params: {title: 'My Ini123tial Scene'},
                    index: 0,
                    component: MainScene
                }}
                configureScene={(route) => {
                    var sceneConfigs = Navigator.SceneConfigs.PushFromRight;
                    sceneConfigs.gestures = null;
                    return sceneConfigs;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component  {...route.params} navigator={navigator}/>
                }
                }
            />
        )
    }

}

import CalcScene from './CalcScene'
import ViewPagerScene from './ViewPagerScene'
import MainScene from './MainScene'


class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired
    }

    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component: ViewPagerScene,
                params: {
                    title: "yooo"
                }
            })
        }
    }

    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>

                <TouchableHighlight onPress={()=> {
                    this.props.navigator.push({
                        component: CalcScene,
                        params: {
                            title: "计算器"
                        }
                    })
                }}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }

}


// AppRegistry.registerComponent('AwesomeProject', ()=>SimpleNavigationDemo);

AppRegistry.registerComponent('AwesomeProject', ()=>SimpleNavigationDemo);