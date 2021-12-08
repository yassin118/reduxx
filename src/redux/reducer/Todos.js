import { ADD_TODO, EDIT_TODO, TOGGLE_TODO } from '../actionType';

const initialState = {
    todos: []
}

const todos = (state = initialState, action) => {
    switch(action.type) {
    case ADD_TODO: {
        const { id, content } = action.payload
        return {
            todos: [
                ...state.todos,
                { content, completed: false, id }
            ]
        }
    }
    case EDIT_TODO:
        return {
            ...state,
            initialState : state.todos.map(task => task.id === action.payload.id ? 
                {...task, content: action.payload.content} : task)
        }
    case TOGGLE_TODO: {
        const { id } = action.payload;
        const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
        return { todos }
    }

    default: {
        return state;
    }
}
}

export default todos;