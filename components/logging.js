import React from 'react';
import { Text, View, StyleSheet, Image, Button, WebView, Linking, TouchableOpacity, Platform, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { cs } from '../helpers';
import SafariView from 'react-native-safari-view';
import { AppLoading } from 'expo';

class Logging extends React.Component {

	static labels = {};

	constructor(props){
		super(props);	
		this.labels = this.props.labels.Logging;
	}

	

	// Set up Linking
  componentDidMount() {
		// Add event listener to handle OAuthLogin:// URLs *orjinal code*
		Linking.addEventListener('url', this.handleOpenURL);
		// Launched from an external URL
		Linking.getInitialURL().then((url) => {
		  if (url) {
				this.handleOpenURL({ url });
		  }
		}).catch(() => {
			//alert('some thing went wrong in linking');
		});
  };

  componentWillUnmount() {
		// Remove event listener
		Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
		// Extract stringified user string out of the URL
		console.log(url);
		const [,user_string] = url.match(/user=([^#]+)/);

		let user_array = decodeURI(user_string).split(',');
		console.log(user_array);
		const user = {
			id: user_array[2].split('"')[3],
			name: user_array[0].split('"')[3].split(' ')[0],
			last_name: user_array[0].split('"')[3].split(' ')[1],
			img: user_array[1].split('"')[3],
			email: user_array[3].split('"')[3],
		}

		this.props.set_user_auth(user);
		this.props.navigation.navigate('Home_container');
		
		if (Platform.OS === 'ios') {
		  SafariView.dismiss();
		}
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => {
		this.openURL('https://turkubackend.herokuapp.com/auth/facebook');

		/*const user = {
		  "email": "mohammad.altenji@gmail.com",
		  "id": "1694376373969523",
		  "img": "https://lookaside.facebook.com/platform/profilepic/?asid=1694376373969523&height=50&width=50&ext=1524529039&hash=AeQ68RO-Fh96Hm61",
		  "last_name": "Altenji",
		  "name": "Mohammad",
		}
		
		this.props.set_user_auth(user);*/
  };

  // Handle Login with Google button tap
  loginWithGoogle = () => {
  	this.openURL('https://turkubackend.herokuapp.com/auth/google')
  };

  // Open URL in a browser
  openURL = (url) => {
		// Use SafariView on iOS
		if (Platform.OS === 'ios') {
		  SafariView.show({
			url: url,
			fromBottom: true,
		  });
		}
		// Or Linking.openURL on Android
		else {
		  Linking.openURL(url);
		}
  };
	
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
					<Text style={styles.text1_inner}> {this.labels.login_start} </Text>
				</View>

				<TouchableOpacity
					style={styles.fb_button}
					onPress={this.loginWithFacebook}
				>
					<View style={styles.button_inner}>
						<Icon
							name="facebook"
							style={styles.social_icons}
						></Icon>
						<Text style={styles.inner_icon_text}> {this.labels.by_facebook} </Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.gm_button}
					onPress={this.loginWithGoogle}
				>
					<View style={styles.button_inner}>
						<Icon
							name="google"
							style={styles.social_icons}
						></Icon>
						<Text style={styles.inner_icon_text}> {this.labels.by_google} </Text>
					</View>
				</TouchableOpacity>
			</View>
		);
		
	}
};

const mapStateToProps = (state) => {
	return {
		labels: state.app_labels,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_user_auth: (val) => {
			dispatch({
				type: 'SET_USER_AUTH',
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