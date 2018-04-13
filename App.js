import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { AppNav } from './config/router';
import app_lan from './reducers/app_lan';
import app_labels from './reducers/app_labels';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AppLoading } from 'expo';
import { cs } from './helpers';

const myLogger = (store) => (next) => (action) => {
	cs('Logged Action: ', action);
	next(action);
};

const reducers = combineReducers({ app_lan, app_labels });
const store = createStore(reducers, compose(autoRehydrate(),applyMiddleware(logger)));

export default class App extends React.Component {

	componentDidMount() {
		persistStore(
			store,
			{
				storage: AsyncStorage,
				whitelist: ['app_lan']
			}
		);
	}

	render() {
		return (
			<Provider store={store}>
				<AppNav />
			</Provider>
		);
	}
}