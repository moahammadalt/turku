import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { AppNav } from './config/router';
import app_lan from './reducers/app_lan';
import app_labels from './reducers/app_labels';
import auth_user from './reducers/auth_user';
import { AsyncStorage, Text } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AppLoading } from 'expo';

const myLogger = (store) => (next) => (action) => {
	console.log('Logged Action: ', action);
	next(action);
};

const reducers = combineReducers({ app_lan, app_labels, auth_user });
const store = createStore(reducers, undefined, compose(autoRehydrate(),applyMiddleware(logger)));

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			boot: false
		};
	}

	componentDidMount() {
		persistStore(
			store,
			{
				storage: AsyncStorage,
				whitelist: ['app_lan', 'auth_user']
			},
			() => {
				this.setState({ boot: true });
			}
		);
	}

	render() {
		if(this.state.boot){
			return (
				<Provider store={store}>
					<AppNav boot={true} />
				</Provider>
			);
		}
		else{
			return <AppLoading />;
		}
	}
}