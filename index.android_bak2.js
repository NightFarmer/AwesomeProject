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
} from 'react-native'

var Rx = require("rx");

// import fetchObservable from "fetch-observable";

import {
    Platform,
} from 'react-native';


import {
    isFirstTime,
    isRolledBack,
    packageVersion,
    currentVersion,
    checkUpdate,
    downloadUpdate,
    switchVersion,
    switchVersionLater,
    markSuccess,
} from 'react-native-update';
import _updateConfig from './update.json';
const {appKey} = _updateConfig[Platform.OS];


class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}</Text>
        )
    }
}

class Blink extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            showText: true
        };
        setInterval(()=> {
            let change = {};
            change["showText"] = !this.state.showText;
            this.setState(change);
        }, 1000)
    }

    render() {
        let display = this.state.showText ? this.props.text : "23333";
        return (
            <Text style={styles.bigblue}>{display}</Text>
        )
    }
}

class HelloWorldApp extends Component {
    render() {
        let pic = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
        };
        return (
            <View style={{alignItems: "center", backgroundColor: "#778899", flex: 1}}>
                <Blink text="heheda"/>
                <View style={{width: 50, height: 1, backgroundColor: "red", flex: 1}}/>
                <Greeting name="yoo"/>
                <Greeting name="yoo1"/>
                <Greeting name="yoo2"/>
                <Greeting name="yoo3"/>
                <Greeting name="yoo4"/>
                <Image source={pic} style={{width: 193, height: 110, flex: 1}}/>
            </View>
        )
    }
}

class JustifyContentBasics extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch"
            }}>

                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{
                    height: 50,
                    backgroundColor: 'steelblue',
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}>
                    <Text style={{backgroundColor: "#AA7777"}}>hehe</Text>

                    <Text style={{backgroundColor: "#AAAA77"}}>yooo</Text>
                </View>
            </View>
        )
    }
}

class PizzaTranslator extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            mytext: "",
            rxconsole: ""
        };
        // var requestStream = Rx.Observable.just('https://api.github.com/users');

    }

    hehe() {
        const timeEvents = Rx.Observable
            .interval(1000);
        const numberEvents = Rx.Observable
            .range(1, 100);
        Rx.Observable
            .zip(timeEvents, numberEvents, function pickValue(t, n) {
                return n;
            })
            .subscribe((it)=>this.setState({rxconsole: it}))
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    placeholder={"input..."}
                    placeholderTextColor={"#ff0000"}
                    onChangeText={(text)=> this.setState({mytext: text})}
                />
                {/*<Text>{this.state.mytext.split(' ').map((word)=>word&&"xx").join(" ")}</Text>*/}
                <Text onPress={this.hehe()}>{this.state.mytext.split("").join("^")}</Text>
                <Text>{this.state.rxconsole}</Text>
            </View>
        )
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 80}}>React Native</Text>
            </ScrollView>
        );
    }
}


class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
            ])
            // dataSource:ds.cloneWithRows(this.getMoviesFromApiAsync)
        };

        // fetch('https://mywebsite.com/endpoint/', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         firstParam: 'yourValue',
        //         secondParam: 'yourOtherValue',
        //     })
        // })
        this.getMoviesFromApiAsync()
    }

    // hehe() {
    //
    //     const liveFeed = fetchObservable(
    //         "http://facebook.github.io/react-native/movies.json", // <-- URL or array of URLs.
    //         {
    //             fetch: fetch,  // <-- Replacable fetch implementation.
    //             refreshDelay: (iteration) => iteration * 1000, // <-- Callback or just integer ms.
    //             method: "POST" // <-- Basic Fetch API options.
    //         }
    //     )
    //         .map((response) => response.json())
    //         .subscribe({
    //             next (response) {
    //                 console.dir(response.json());
    //             },
    //             error (error) {
    //                 console.warn(error.stack || error);
    //             }
    //         });
    //
    //
    //
    // }

    getMoviesFromApiAsync() {
        return fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    dataSource: ds.cloneWithRows(responseJson.movies)
                })
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <View style={{paddingTop: 22, flex: 1}}>
                <Text>yoooooooooooo</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}</Text>}
                />
            </View>
        );
    }
}

import MyScene2 from './MyScene2'

class HeheApp extends Component {
    render() {
        return (
            <MyScene2/>
        )
    }
}

class NavigatorDemo extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    title: "My Initial Scene",
                    index: 0
                }}
                renderScene={
                    (route, navigator)=>
                        <MyScene2 title={route.title}/>
                }
            />
        )
    }
}


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
                    component: MyScene
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


class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired
        // onForward: PropTypes.func.isRequired,
        // onBack: PropTypes.func.isRequired,
    }

    _pressButton() {
        const {navigator} = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if (navigator) {
            navigator.push({
                component: MyScene2,
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


class MyProject extends Component {
    componentWillMount(){
        if (isFirstTime) {
            Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
                {text: '是', onPress: ()=>{throw new Error('模拟启动失败,请重启应用')}},
                {text: '否', onPress: ()=>{markSuccess()}},
            ]);
        } else if (isRolledBack) {
            Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        }
    }
    doUpdate = info => {
        downloadUpdate(info).then(hash => {
            Alert.alert('提示', '下载完毕,是否重启应用?', [
                {text: '是', onPress: ()=>{switchVersion(hash);}},
                {text: '否',},
                {text: '下次启动时', onPress: ()=>{switchVersionLater(hash);}},
            ]);
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };
    checkUpdate = () => {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
                    {text: '确定', onPress: ()=>{info.downloadUrl && Linking.openURL(info.downloadUrl)}},
                ]);
            } else if (info.upToDate) {
                Alert.alert('提示', '您的应用版本已是最新.');
            } else {
                Alert.alert('提示', '检查到新的版本'+info.name+',是否下载?\n'+ info.description, [
                    {text: '是', onPress: ()=>{this.doUpdate(info)}},
                    {text: '否',},
                ]);
            }
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎使用热更新服务
                </Text>
                <Text style={styles.instructions}>
                    这是版本二 {'\n'}
                    当前包版本号: {packageVersion}{'\n'}
                    当前版本Hash: {currentVersion||'(空)'}{'\n'}
                </Text>
                <TouchableOpacity onPress={this.checkUpdate}>
                    <Text style={styles.instructions}>
                        点击这里检查更新
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

import ViewPagerScene from './ViewPagerScene'

// AppRegistry.registerComponent('MyProject', () => MyProject);

// const styles = StyleSheet.create({
//     bigblue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30
//     }
// });

// AppRegistry.registerComponent('AwesomeProject', ()=>SimpleNavigationDemo);

AppRegistry.registerComponent('AwesomeProject', ()=>ViewPagerScene);