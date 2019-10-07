import { Kobra, h } from 'kobra';
import home from './routes/home';
import release from './routes/release';
import discography from './routes/discography';
import { Redirect } from './components/Redirect';
import { soundCloudService } from './services/soundcloud.service';
import { lastFMService } from './services/lastfm.service';

const app = new Kobra({ router: 'history' });

const initialState = {
  albums: [],
  discography: {},
  loading: true
};

app.use((state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALBUMS':
      return { ...state, albums: [...state.albums, ...action.payload] };
    case 'SET_DISCOGRAPHY':
      return { ...state, discography: action.payload, loading: false };
    default:
      return state;
  }
});

app.run(dispatch => {
  Promise.all([
    soundCloudService.getAlbums(),
    lastFMService.getActivity()
  ]).then(([discography, albums]) => {
    const parsedDiscography = discography.reduce(
      (accumulator, current) => ({
        ...accumulator,
        [current.permalink]: current
      }),
      {}
    );

    dispatch({
      type: 'SET_DISCOGRAPHY',
      payload: parsedDiscography
    });

    dispatch({
      type: 'SET_ALBUMS',
      payload: albums
    });
  });
});

app.route('/', home);
app.route('/discography', discography);
app.route('/discography/:id', release);
app.route('*', () => <Redirect to="/" />);

app.mount(document.querySelector('#app'));
