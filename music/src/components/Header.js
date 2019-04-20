import { h, Link } from 'kobra';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
    display: 'flex',
    alignItems: 'center'
  },

  nav: {
    flexGrow: 1
  },

  link: {
    marginRight: 15,
    cursor: 'pointer',
    fontSize: '0.85rem',
    opacity: 0.5,

    ':hover': {
      opacity: 0.65
    }
  },

  soundcloud: {
    color: '#f50',
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

export const Header = () => (
  <header className={css(styles.header)}>
    <nav className={css(styles.nav)}>
      <Link
        to="/"
        className={css(
          styles.link,
          window.location.pathname === '/' && styles.active
        )}
      >
        Home
      </Link>
      <Link
        to="/sound-cache"
        className={css(
          styles.link,
          window.location.pathname === '/sound-cache' && styles.active
        )}
      >
        Sound Cache
      </Link>
      <Link
        to="/figure-1"
        className={css(
          styles.link,
          window.location.pathname === '/figure-1' && styles.active
        )}
      >
        Figure 1
      </Link>
    </nav>
    <a
      href="https://soundcloud.com/johnsylvain"
      target="_blank"
      className={css(styles.link, styles.soundcloud)}
    >
      Sound Cloud
    </a>
  </header>
);
