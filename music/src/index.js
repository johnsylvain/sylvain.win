import { kobra, h } from 'kobra';
import ApolloClient, { gql } from 'apollo-boost';
import home from './routes/home';
import release from './routes/release';
import discography from './routes/discography';
import { Redirect } from './components/Redirect';

const app = kobra();
const client = new ApolloClient({ uri: 'https://api.sylvain.win' });

const initialState = {
  albums: [],
  discography: {},
  loading: true,
  soundcloudUrl: ''
};

const actions = {
  setData: data => ({
    soundcloudUrl: data.soundcloudUrl,
    spotifyUrl: data.spotifyUrl,
    albums: data.albums,
    discography: data.discography,
    loading: false
  }),
  getData: () => async (state, actions) => {
    const response = await client.query({
      query: gql`
        query {
          resume {
            profiles {
              soundcloud
              spotify
            }
          }
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

    actions.setData({
      soundcloudUrl: response.data.resume.profiles.soundcloud,
      spotifyUrl: response.data.resume.profiles.spotify,
      albums: response.data.activity.music,
      discography: parsedDiscography
    });
  }
};

app.store(actions, initialState);
app.on('load', (state, actions) => {
  actions.getData();
});
app.route('/', home);
app.route('/discography', discography);
app.route('/discography/:id', release);
app.route('*', () => <Redirect to="/" />);

app.mount(document.querySelector('#app'));
