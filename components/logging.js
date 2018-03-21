import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { cs } from '../helpers';

class Logging extends Component {

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
				<Text>
          hiiiiiiiiiiiiiii
        </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
});

export default Logging