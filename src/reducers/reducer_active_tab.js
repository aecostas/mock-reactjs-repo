export default function(state = null, action) {
	switch(action.type) {
		case 'TAB_ACTIVE':
			return action.payload;
	}

	return state
}
