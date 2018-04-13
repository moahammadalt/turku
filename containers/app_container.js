import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { cs } from '../helpers';


class App_container extends React.Component {

	constructor(props) {
		super(props);
		if(this.props.app_lan == ''){
			this.props.navigation.navigate('Intro');
		}
		else{
			this.props.set_labels(this.props.app_lan);
			this.props.navigation.navigate('Logging');
		}
	}
	
	render() {
		return (
			<View style={styles.container}>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		app_lan: state.app_lan,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_labels: (val) => {
			dispatch({
				type: 'SET_APP_LABELS',
				payload: val
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App_container);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
