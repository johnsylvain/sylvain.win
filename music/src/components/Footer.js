import { h, Link } from 'kobra';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.7rem',
    padding: '2rem 0'
  },

  link: {
    fontWeight: 700,
    cursor: 'pointer'
  }
});

export const Footer = () => (
  <footer className={css(styles.footer)}>
    <div>John Sylvain &copy; {new Date().getFullYear()}</div>
    <div>
      Built with{' '}
      <a
        href="https://github.com/johnsylvain/kobra"
        target="_blank"
        className={css(styles.link)}
      >
        Kobra
      </a>
      .
    </div>
  </footer>
);
