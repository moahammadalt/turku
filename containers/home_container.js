import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';

class Home_container extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>hiiii {this.props.user.name}</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		app_lan: state.app_lan,
		user: state.auth_user,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home_container);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
	}
});