import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { fetchAlbums } from '../actions';
import { Album } from '../components/Album';
import { Placeholder } from '../components/Placeholder';

const styles = StyleSheet.create({
  container: {
    maxWidth: 800,
    margin: '100px auto'
  },

  albums: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
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
})

export default (state, dispatch) => (
  <div
    hook={{ mount: () => fetchAlbums(dispatch) }}
    className={css(styles.container)}
  >
    <h1 className={css(styles.title)}>What I've been listenting to this week</h1>
    {state.albums.length
      ? <div className={css(styles.albums)}>{state.albums.map((album, index) => <Album album={album} index={index} />)}</div>
      : <Placeholder />}
    <p className={css(styles.footer)}>
      powered by <a
        href="https://www.last.fm/user/johnsylvain"
        target="_blank"
        className={css(styles.link)}
      >
        last.fm
      </a>
    </p>
  </div>
);