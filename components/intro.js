import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { cs } from '../helpers';

class Intro extends Component {

	constructor(props) {
	  super(props);
	  cs(this.props);

	  this.state = {
	  	app_lan: 'aaa',
	  };
	}

	choose_app_lan (lan){

		cs(lan)

		this.setState({app_lan: lan}, ()=>{
		   cs(this.state);
		});
	}
	
	render() {
			return (
				<View style={styles.container}>
					<Image
	          style={{width: 300, height: 300}}
	          source={require('../assets/logo.png')}
	        />
					<Button
					  onPress={this.choose_app_lan.bind(this, 'arabic')}
					  title="العربية"
					  color="#f57f17"
					/>
					<Button
					  onPress={this.choose_app_lan.bind(this, 'English')}
					  title="English"
					  color="#f57f17"
					/>
					<Button
					  onPress={this.choose_app_lan.bind(this, 'Türkçe')}
					  title="Türkçe"
					  color="#f57f17"
					/>

				</View>
			)
		}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Intro