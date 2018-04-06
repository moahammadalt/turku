export default (state = {}, action) => {
	switch (action.type) {
	case 'set_lan':
		return action.payload;
	case 'DECREMENT':
		return state - 1;
	default:
		return state;
	}
};