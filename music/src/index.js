import { Kobra } from 'kobra';
import home from './routes/home';
import release from './routes/release';

const app = new Kobra({ router: 'history' });

const initialState = {
  albums: [],
  releases: {
    'figure-1': {
      name: 'Figure 1',
      iframe:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/409321373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    },
    'sound-cache': {
      name: 'Sound Cache',
      iframe:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/684972432&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    }
  }
};

app.use((state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALBUMS':
      return { ...state, albums: [...state.albums, ...action.payload] };
    default:
      return state;
  }
});

app.route('/', home);
app.route('/:id', release);

app.mount(document.querySelector('#app'));
