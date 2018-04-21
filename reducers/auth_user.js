const auth_user = (state = {}, action) => {
	let new_state;

	switch (action.type) {
	case 'SET_USER_AUTH':
		new_state = action.payload;
		break;
	}
	return new_state || state;
};

export default auth_user;