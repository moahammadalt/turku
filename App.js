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
import intro_reducer from './reducers/intro_reducer';
import { bindActionCreators } from 'redux';

const reducer = combineReducers({ navigation, intro_reducer });
const store = createStore(reducer, applyMiddleware(logger));

store.subscribe(()=>{
	cs('aaaaaaaaaaaa');
	cs(store.getState());
});

store.dispatch({
	type: 'set_lan',
	payload: 23,
});

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