import { Kobra, h } from 'kobra';
import home from './routes/home';
import release from './routes/release';
import discography from './routes/discography';
import { Redirect } from './components/Redirect';

const app = new Kobra({ router: 'history' });

const initialState = {
  albums: [],
  discography: {
    'figure-1': {
      slug: 'figure-1',
      name: 'Figure 1',
      releaseDate: '2018-12-29',
      iframeId: '409321373'
    },
    'exit-strategy': {
      slug: 'exit-strategy',
      name: 'Exit Strategy',
      releaseDate: '2019-10-04',
      iframeId: '885896302'
    },
    'sound-cache': {
      slug: 'sound-cache',
      name: 'Sound Cache',
      releaseDate: '2019-01-13',
      iframeId: '684972432'
    },
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
app.route('/discography', discography);
app.route('/discography/:id', release);
app.route('*', () => <Redirect to="/" />);

app.mount(document.querySelector('#app'));
