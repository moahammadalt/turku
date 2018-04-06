import { NavigationActions } from 'react-navigation';
import { Navigator } from '../config/router';


const initialState = Navigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({
			routeName: 'Intro',
		}),
	],
}));

export default (state = initialState, action) => {
	let newState = Navigator.router.getStateForAction(action, state);

	return newState || state;
};