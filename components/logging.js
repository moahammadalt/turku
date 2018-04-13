import React from 'react';
import { Text, View, StyleSheet, Image, Button, WebView, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { cs } from '../helpers';

class Logging extends React.Component {

	go_back (){
		//this.props.change_route('Intro');
	}
	
	render() {
		return (
			<View style={styles.container}>

				<View style={styles.img}>
					<Image
						style={{width: 280, height: 280}}
						source={require('../assets/logo.png')}
					/>
				</View>

				<View style={styles.text1}>
					<Text style={styles.text1_inner}> Log in to start </Text>
				</View>

				<TouchableOpacity
					style={styles.fb_button}
					onPress={this.go_back.bind(this)}
				>
					<View style={styles.button_inner}>
						<Icon
							name="facebook"
							style={styles.social_icons}
						></Icon>
						<Text style={styles.inner_icon_text}>  By Facebook</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.gm_button}
					onPress={this.onPress}
				>
					<View style={styles.button_inner}>
						<Icon
							name="google"
							style={styles.social_icons}
						></Icon>
						<Text style={styles.inner_icon_text}>  By Google</Text>
					</View>
				</TouchableOpacity>
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
		bla: (val) => {
			dispatch({
				type: '',
				payload: val,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Logging);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
	},
	fb_button: {
		flex: 1,
		flexDirection: 'row',
		borderRadius: 10,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 30,
		backgroundColor: '#3b5998',
		
	},
	gm_button: {
		flex: 1,
		borderRadius: 10,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 70,
		justifyContent: 'center',
		backgroundColor: '#DD4B39',
	},
	social_icons: {
		fontSize: 40,
		marginLeft: 15,
		color: '#ffffff'
	},
	img: {
		flex: 3,
		marginTop: 50,
		marginLeft: 5,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text1: {
		flex: 2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text1_inner: {
		fontSize: 25,
		color: '#444444'
	},
	inner_icon_text: {
		fontSize: 23,
		color: '#ffffff',
		marginLeft: 45,
		justifyContent: 'center',
	},
	button_inner: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
});