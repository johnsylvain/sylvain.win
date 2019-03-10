import { Kobra } from 'kobra';
import { saveState } from './local-storage';
import homeRoute from './routes/home';
import reducer from './reducer';
import './style.css';

const app = new Kobra();

app.route('/', homeRoute);
app.use(reducer);
app.use(state => {
  if (state && state.todos) {
    saveState('kobra.todos', state.todos);
  }
  return state;
});
app.mount(document.querySelector('#app'));
