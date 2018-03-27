import { NavigationActions } from 'react-navigation';
import Navigator from '../config/router';

const initialAction = { type: NavigationActions.Init };
const initialState = Navigator.router.getStateForAction(initialAction);

export default (state = initialState, action) => {
	let newState = Navigator.router.getStateForAction(action, state);

	return newState;
};