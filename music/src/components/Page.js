import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Header } from './Header';
import { Footer } from './Footer';

const styles = StyleSheet.create({
  container: {
    maxWidth: 700,
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '0 1rem'
  },

  main: {
    flexGrow: 1
  }
});

export const Page = (props, children) => (
  <div className={css(styles.container)}>
    <Header soundcloudUrl={props.soundcloudUrl} spotifyUrl={props.spotifyUrl} />
    <main className={css(styles.main)}>{children}</main>
    <Footer />
  </div>
);
