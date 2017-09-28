import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';

 const reducer = combineReducers({
    todo,
    filter
});

export default reducer;