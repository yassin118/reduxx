import { ADD_TODO, TOGGLE_TODO, SET_FILTER, EDIT_TODO } from "./actionType";
import { v4 as uuidv4 } from 'uuid';



export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: uuidv4(),
        content
    }
});

export const editToDo = (editTodo, id) => {
    return {
        type: EDIT_TODO,
        payload: {
            id: id,
            content: editTodo,
        }
    }
};

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});