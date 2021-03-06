import React from 'react'
import { connect } from 'react-redux'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

import LoginActions from '../Redux/LoginRedux'

@connect(store => ({
  initApp: store.login.initApp,
}))
export default class Launch extends React.Component {
componentDidMount() {
  setTimeout(() => { 
    Actions.launch2()
  }, 2000)
}
  render(){
    return (
      <View style={styles.container}>
        { this.props.initApp 
          ? <View style={{backgroundColor: '#3c3c3c'}} /> 
          : <Image style={{width: 300, height: 300}} source={{uri: 'http://i.imgur.com/mvywlbT.png'}}/> }
      </View>
    )
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
})