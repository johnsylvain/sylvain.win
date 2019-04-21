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
    opacity: 0.6,

    ':hover': {
      opacity: 0.75
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

export const Header = () => (
  <header className={css(styles.header)}>
    <nav className={css(styles.nav)}>
      <Link
        to="/"
        activeClass={css(styles.active)}
        className={css(styles.link)}
      >
        Home
      </Link>
      <Link
        to="/discography"
        activeClass={css(styles.active)}
        className={css(styles.link)}
      >
        Discography
      </Link>
    </nav>
    <a
      href="https://soundcloud.com/johnsylvain"
      target="_blank"
      className={css(styles.link, styles.soundcloud)}
    >
      SoundCloud
    </a>
  </header>
);
