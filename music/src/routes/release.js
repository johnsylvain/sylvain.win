import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Page } from '../components/Page';
import { Redirect } from '../components/Redirect';

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
  const release = state.discography[state.params.id];
  document.title = `${(release || {}).name} - John Sylvain`;

  return (
    <Page>
      {!!release ? (
        <div>
          <h1 className={css(styles.title)}>{release.name}</h1>
          <iframe
            className={css(styles.iframe)}
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${
              release.iframeId
            }&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </Page>
  );
};
