import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { cs } from '../helpers';


class Intro extends React.Component {

	constructor(props) {
		super(props);
	}

	choose_app_lan (lan){

		cs(lan);
		this.props.set_lan(lan);

		this.props.navigation.navigate('Logging');
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
						onPress={this.choose_app_lan.bind(this, 'AR')}
						title="العربية"
						color="#ff8a50"
						marginBottom = '10'
					/>
				</View>
				<View style={styles.btn} >
					<Button
						onPress={this.choose_app_lan.bind(this, 'EN')}
						title="English"
						color="#ff8a50"
						marginBottom = '10'
						alignItems = 'stretch'
					/>
				</View>
				<View style={styles.btn} >
					<Button
						onPress={this.choose_app_lan.bind(this, 'TR')}
						title="Türkçe"
						color="#ff8a50"
					/>
				</View>
				<View style={styles.last_line}>
					<Text style={styles.last_text}>
						Eğer ücretli Türkçe öğretmek isterseniz :
					</Text>

					<Button
						onPress={this.choose_app_lan.bind(this, 'TR')}
						title="Buraya Tıklayın"
						color="#8aacc8"
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_lan: (name) => {
			dispatch({
				type: 'SET_LAN',
				payload: name
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);


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
