import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Album } from '../components/Album';
import { Placeholder } from '../components/Placeholder';
import { Page } from '../components/Page';

const styles = StyleSheet.create({
  albums: {
    display: 'grid',
    gridGap: 20,
    gridTemplateColumns: 'repeat(6, 100px)',
    gridTemplateRows: 'repeat(2, auto)',

    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 100px)',
      gridTemplateRows: 'repeat(3, auto)'
    }
  },

  title: {
    fontSize: '1.4rem',
    display: 'block',
    marginBottom: 30,
    fontWeight: 500
  },

  footer: {
    fontSize: '0.8rem',
    textAlign: 'right',
    display: 'block'
  },

  link: {
    fontWeight: 700,
    cursor: 'pointer'
  }
});

export default (state, dispatch) => {
  document.title = 'Home - John Sylvain';

  const getAlbums = () => {
    if (!state.albums.length) {
      (async () => {
        const response = await fetch(
          `https://wt-5f92353bfdf241b0b97a7b3a6d3547a4-0.sandbox.auth0-extend.com/lastfm`
        );
        const data = await response.json();
        dispatch({ type: 'SET_ALBUMS', payload: data });
      })();
    }
  };

  return (
    <Page>
      <div
        hook={{
          mount: getAlbums,
          update: getAlbums
        }}
      >
        <h2 className={css(styles.title)}>
          What I've been listening to this week
        </h2>

        {state.albums.length ? (
          <div className={css(styles.albums)}>
            {state.albums.map((album, index) => (
              <Album album={album} index={index} />
            ))}
          </div>
        ) : (
          <Placeholder />
        )}

        <p className={css(styles.footer)}>
          via{' '}
          <a
            href="https://www.last.fm/user/johnsylvain"
            target="_blank"
            className={css(styles.link)}
          >
            last.fm
          </a>
        </p>
      </div>
    </Page>
  );
};
