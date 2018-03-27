import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Navigator from '../config/router';
import { TabNavigator, StackNavigator } from 'react-navigation';
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

		   this.props.navigation.navigate('Logging');
		});
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.img}>
					<Image
	          style={{width: 300, height: 300}}
	          source={require('../assets/logo.png')}
	        />
        </View>
        <View style={styles.btn} >
					<Button
					  onPress={this.choose_app_lan.bind(this, 'arabic')}
					  title="العربية"
					  color="#ff8a50"
					  marginBottom = '10'
					/>
				</View>
				<View style={styles.btn} >
					<Button
					  onPress={this.choose_app_lan.bind(this, 'English')}
					  title="English"
					  color="#ff8a50"
					  marginBottom = '10'
					  alignItems = 'stretch'
					/>
				</View>
				<View style={styles.btn} >
					<Button
					  onPress={this.choose_app_lan.bind(this, 'Türkçe')}
					  title="Türkçe"
					  color="#ff8a50"
					/>
				</View>
				<View style={styles.last_line}>
	        <Text style={styles.last_text}>
	          Eğer ücretli Türkçe öğretmek isterseniz :
	        </Text>

	       <Button
	       		onPress={this.choose_app_lan.bind(this, 'Türkçe')}
					  title="Buraya Tıklayın"
					  color="#8aacc8"
					/>
    		</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
  	flex: 1,
    justifyContent: 'center',
    marginBottom: 17,
    width: 180,
  },
  last_line: {
  	flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  last_text:{
  	fontSize: 17,
  	marginBottom: 5,
  	color: '#444444'
  },
  img: {
  	flex: 5
  }
});

export default Intro