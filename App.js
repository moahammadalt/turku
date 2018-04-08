import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { cs } from './helpers';

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import logger from 'redux-logger';

import { Navigator, AppNav } from './config/router';
import navigation from './reducers/navigations';
import app_lan from './reducers/app_lan';

const myLogger = (store) => (next) => (action) => {
	console.log("Logged Action: ", action);
	next(action);
};

const reducers = combineReducers({ navigation, app_lan });
const store = createStore(reducers, applyMiddleware(logger));

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<AppNav />
			</Provider>
		);
	}
}