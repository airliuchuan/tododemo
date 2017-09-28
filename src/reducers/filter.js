import { SET_FILTER } from '../constants/filterActionTypes';
import { FilterTypes } from '../constants/filterTypes';

export default ( state = FilterTypes.ALL, action) => {
    switch(action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}