const app_labels = (state = '', action) => {
	switch (action.type) {

	case 'SET_APP_LABELS':
		
		if(action.payload == 'EN'){
			state = 'app is english';
		}
		else if(action.payload == 'AR'){
			state = 'app is turkish';
		}
		else if(action.payload == 'TR'){
			state = 'app is arabic';
		}
		else{
			state = 'app is undefined';
		}
		break;

	}
	return state;
};

export default app_labels;