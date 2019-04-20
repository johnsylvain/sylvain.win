import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Header } from './Header';

const styles = StyleSheet.create({
  container: {
    maxWidth: 700,
    margin: '100px auto'
  }
});

export const Page = (_, children) => (
  <div className={css(styles.container)}>
    <Header />
    {children}
  </div>
);
