import { FETCH_POSTS } from '../actions';
//import { _ } from 'lodash';
var _ = require('lodash');

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.warn('Returning payload data: ', action.payload.data);
			return _.mapKeys(action.payload.data, 'id');
			break;
		default:
			return state;
	}
}
