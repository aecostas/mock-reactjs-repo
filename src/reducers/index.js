import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import ActiveTab from './reducer_active_tab';

const rootReducer = combineReducers({
	tab: ActiveTab,
});

export default rootReducer;
