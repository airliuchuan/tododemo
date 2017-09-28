import * as todoActionTypes from '../constants/todoActionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case todoActionTypes.ADD_TODO:
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ];
        case todoActionTypes.TOGGLE_TODO:
            return state.map(item => {
                if(item.id === action.id) {
                    return {
                        ...item, completed: !item.completed
                    }
                } else {
                    return item;
                }
            });
        case todoActionTypes.REMOVE_TODO:
            return state.filter(item => {
                return item.id !== action.id
            });
        default:
            return state;
    }
}