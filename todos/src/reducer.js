import { Todo } from './models/todo';
import { loadState } from './local-storage';

const todos = (loadState('kobra.todos') || []).map(
  ({ text, completed }) => new Todo(text, completed)
);

export default (state = { todos }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: state.todos.concat(new Todo(action.payload)) };
    case 'TOGGLE_TODO': {
      const id = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, id),
          state.todos[id].toggle(),
          ...state.todos.slice(id + 1)
        ]
      };
    }
    case 'REMOVE_TODO': {
      const id = action.payload;
      return {
        ...state,
        todos: [...state.todos.slice(0, id), ...state.todos.slice(id + 1)]
      };
    }
    default:
      return state;
  }
};
