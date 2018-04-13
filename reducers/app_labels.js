import { labels } from '../helpers';

const app_labels = (state = '', action) => {
	let new_state;
	switch (action.type) {
	case 'SET_APP_LABELS':
		
		if(action.payload == 'EN'){
			new_state = labels.EN;
		}
		else if(action.payload == 'AR'){
			new_state = labels.AR;
		}
		else if(action.payload == 'TR'){
			new_state = labels.TR;
		}
		else{
			new_state = {};
		}
		break;

	}
	return new_state || state;
};

export default app_labels;