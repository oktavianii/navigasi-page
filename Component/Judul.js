import React from 'react';
import {Text} from 'react-native';

export default class Judul extends React.Component{
	render(){
		return(
			<Text style={salon.judul}>BIODATA</Text>
			)
	}
}
const salon = {
	Judul: {
		color : 'blue',
		fontSize: 100,
		fontWeight: 'bold',
	}
}