import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { cs } from './helpers';

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import logger from 'redux-logger';

import Navigator from './config/router';
import navigation from './reducers/navigations';

const reducer = combineReducers({ navigation });
const store = createStore(reducer, applyMiddleware(logger));

export default class App extends React.Component {

	constructor(props) {
		super(props);
		console.log('hiiii')
	}

	render() {
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}