import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { cs } from '../helpers';



const is_obj_empty = (obj) => {

    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;

    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

class App_container extends React.Component {

	constructor(props) {
		super(props);
		if(this.props.app_lan == ''){
			this.props.navigation.navigate('Intro');
		}
		else{
			this.props.set_labels(this.props.app_lan);

			cs(this.props.auth_user);
			if(is_obj_empty(this.props.auth_user)){
				this.props.navigation.navigate('Logging');
			}
			else{
				cs('workeddd');
				this.props.navigation.navigate('Home_container');
			}
			
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
		auth_user: state.auth_user,
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
