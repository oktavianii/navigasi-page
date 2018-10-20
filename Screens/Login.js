import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TextInput, KeyboardAviodingView, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

export class Login extends React.Component {
  render() {
    return(
      <View style={styles.container}>
      <Image style={{width:60, height: 100}} source={require('../poto.jpg')}/>
      <Text style={styles.logoText}>Welcome to My World</Text>
      <TextInput style={styles.inputBox}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Email"
      placeholderTextColor = "#ffffff"
      selectionColor="#fff"
      keyboardType="email-address"
      onSubmitEditing={()=> this.password.focus()}/>

      <TextInput style={styles.inputBox}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Password"
      secureTextEntry={true}
      placeholderTextColor = "#ffffff"
      ref={(input) => this.password = input}/>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
container : {
flexGrow: 1,
justifyContent:'center',
alignItems: 'center',
backgroundColor:'#455a64',
},
inputBox: {
width:300,
backgroundColor:'rgba(255, 255,255,0.2)',
borderRadius: 25,
paddingHorizontal:16,
fontSize:16,
color:'#ffffff',
marginVertical: 10
},
logoText : {
marginVertical: 10,
fontSize:18,
color:'rgba(255, 255, 255, 0.7)'
},
button: {
width:300,
backgroundColor:'#1c313a',
borderRadius: 25,
marginVertical: 10,
paddingVertical: 13
},
buttonText: {
fontSize:16,
fontWeight:'500',
color:'#ffffff',
textAlign:'center'
}
});