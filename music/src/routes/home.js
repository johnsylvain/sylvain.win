import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Album } from '../components/Album';
import { Placeholder } from '../components/Placeholder';
import { Page } from '../components/Page';

const fadeRight = {
  from: {
    opacity: 0,
    transform: 'translateX(-20px)'
  },

  to: {
    opacity: 1,
    transform: 'translateX(0px)'
  }
};

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
    display: 'block',
    opacity: 0,
    animationName: fadeRight,
    animationFillMode: 'forwards',
    animationDuration: '0.8s',
    animationDelay: '500ms'
  },

  link: {
    fontWeight: 700,
    cursor: 'pointer'
  }
});

export default state => {
  document.title = 'Home - John Sylvain';

  return (
    <Page soundcloudUrl={state.soundcloudUrl} spotifyUrl={state.spotifyUrl}>
      <h2 className={css(styles.title)}>
        What I've been listening to this week
      </h2>

      {state.albums.length ? (
        <div>
          <div className={css(styles.albums)}>
            {state.albums.map((album, index) => (
              <Album album={album} index={index} />
            ))}
          </div>
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
      ) : (
        <Placeholder />
      )}
    </Page>
  );
};
