import { h, Link } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Page } from '../components/Page';

const styles = StyleSheet.create({
  title: {
    fontSize: '1.4rem',
    display: 'block',
    marginBottom: 30,
    fontWeight: 500
  },

  iframe: {
    width: '100%',
    height: 400
  },

  link: {
    fontWeight: 700,
    cursor: 'pointer'
  }
});

export default state => {
  document.title = !!state.releases[state.params.id]
    ? `${state.releases[state.params.id].name} - John Sylvain`
    : 'Page not found';

  return (
    <Page>
      {!!state.releases[state.params.id] ? (
        <div>
          <h1 className={css(styles.title)}>
            {state.releases[state.params.id].name}
          </h1>
          <iframe
            className={css(styles.iframe)}
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={state.releases[state.params.id].iframe}
          />
        </div>
      ) : (
        <div>
          <p>Page not found.</p>
          <p>
            Go{' '}
            <Link to="/" className={css(styles.link)}>
              Home
            </Link>
          </p>
        </div>
      )}
    </Page>
  );
};
