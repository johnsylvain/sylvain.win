import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
    paddingTop: 100,
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 768px)': {
      paddingTop: 40
    }
  },

  nav: {
    flexGrow: 1
  },

  link: {
    marginRight: 15,
    cursor: 'pointer',
    fontSize: '0.85rem',
    opacity: 0.6,

    ':hover': {
      opacity: 0.75
    }
  },

  spotify: {
    color: '#1ED760',
    margin: 0,
    opacity: 0.6,
    marginLeft: 10,

    ':hover': {
      opacity: 0.8
    }
  },

  soundcloud: {
    color: '#ff5500',
    margin: 0,
    opacity: 0.6,

    ':hover': {
      opacity: 0.8
    }
  },

  active: {
    fontWeight: '700'
  }
});

export const Header = ({ soundcloudUrl, spotifyUrl }) => (
  <header className={css(styles.header)}>
    <nav className={css(styles.nav)}>
      <a
        href="/"
        className={css(
          styles.link,
          window.location.pathname === '/' && styles.active
        )}
      >
        Home
      </a>
      <a
        href="/discography"
        className={css(
          styles.link,
          window.location.pathname === '/discography' && styles.active
        )}
      >
        Discography
      </a>
    </nav>
    {soundcloudUrl ? (
      <a
        href={soundcloudUrl}
        target="_blank"
        className={css(styles.link, styles.soundcloud)}
      >
        SoundCloud
      </a>
    ) : null}
    {spotifyUrl ? (
      <a
        href={spotifyUrl}
        target="_blank"
        className={css(styles.link, styles.spotify)}
      >
        Spotify
      </a>
    ) : null}
  </header>
);
