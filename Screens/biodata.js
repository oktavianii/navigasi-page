import React, { Component } from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
import Judul from '../Component/Judul';
import {StackNavigator} from 'react-navigation';


export default class biodata extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
        <Text style={styles.instructions}>Nama : Widya Oktaviani</Text>
        <Text style={styles.instructions}>Absen : 39</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
        <Image source={require('../foto.jpg')} style={{width: 200, height: 200}}/>     
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
