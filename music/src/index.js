import { Kobra, h } from 'kobra';
import home from './routes/home';
import release from './routes/release';
import discography from './routes/discography';
import { Redirect } from './components/Redirect';
import ApolloClient, { gql } from 'apollo-boost';

const app = new Kobra({ router: 'history' });
const client = new ApolloClient({ uri: 'https://api.sylvain.win' });

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

app.run(async dispatch => {
  const response = await client.query({
    query: gql`
      query {
        discography {
          title
          permalink
          type
          track_count
          release_year
          id
          duration
          created_at
        }
        activity {
          music {
            artist
            album
            image
            url
          }
        }
      }
    `
  });
  const parsedDiscography = response.data.discography.reduce(
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
    payload: response.data.activity.music
  });
});

app.route('/', home);
app.route('/discography', discography);
app.route('/discography/:id', release);
app.route('*', () => <Redirect to="/" />);

app.mount(document.querySelector('#app'));
