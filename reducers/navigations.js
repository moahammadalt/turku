import { NavigationActions } from 'react-navigation';
import Navigator from '../config/router';


const initialState = AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({
			routeName: 'Intro',
		}),
	],
}));

console.log(initialState)
export default (state = initialState, action) => {
	let newState = Navigator.router.getStateForAction(action, state);

	return newState || state;
};