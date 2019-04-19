import { Kobra, h } from 'kobra';
import home from './routes/home';

const app = new Kobra();

app.use((state = { albums: [] }, action) => {
  switch (action.type) {
    case 'SET_ALBUMS':
      return { ...state, albums: [...state.albums, ...action.payload] };
    default:
      return state;
  }
})

app.route('/', home)

app.mount(document.querySelector('#app'))