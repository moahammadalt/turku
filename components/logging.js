import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { connect } from "react-redux";
import { cs } from '../helpers';

class Logging extends Component {

	constructor(props) {
	  super(props);
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>
          {this.props.lan}
        </Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
  return {
		lan: state.app_lan,
  };
};

export default connect(mapStateToProps)(Logging);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
});