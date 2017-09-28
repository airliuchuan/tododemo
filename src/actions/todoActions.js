import * as todoActionTypes from '../constants/todoActionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: todoActionTypes.ADD_TODO,
    id: nextTodoId ++,
    completed: false,
    text
});

export const toggleTodo = (id) => ({
    type: todoActionTypes.TOGGLE_TODO,
    id
});

export const removeTodo = (id) => ({
    type: todoActionTypes.REMOVE_TODO,
    id
});