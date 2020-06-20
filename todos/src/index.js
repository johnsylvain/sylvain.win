import { kobra } from 'kobra';
import { loadState, saveState } from './local-storage';
import { Todo } from './models/todo';
import homeRoute from './routes/home';
import './style.css';

const app = kobra();

const todos = (loadState('kobra.todos') || []).map(
  ({ text, completed }) => new Todo(text, completed)
);

const initialState = { todos };

const actions = {
  addTodo: text => state => ({ todos: state.todos.concat(new Todo(text)) }),
  toggleTodo: id => state => ({
    todos: [
      ...state.todos.slice(0, id),
      state.todos[id].toggle(),
      ...state.todos.slice(id + 1)
    ]
  }),
  removeTodo: id => state => ({
    todos: [...state.todos.slice(0, id), ...state.todos.slice(id + 1)]
  })
};

app.route('/', homeRoute);
app.store(actions, initialState);
app.on('state', state => saveState('kobra.todos', state.todos));
app.mount(document.querySelector('#app'));
