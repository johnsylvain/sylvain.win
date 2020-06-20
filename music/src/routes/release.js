import { h, route } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Page } from '../components/Page';
import { dateFormatter } from '../util/date-formatter';

const styles = StyleSheet.create({
  releaseHeader: {
    display: 'flex',
    alignItems: 'baseline'
  },

  grow: {
    flexGrow: 1
  },

  title: {
    fontSize: '1.4rem',
    display: 'block',
    marginBottom: 8,
    fontWeight: 500,
    marginRight: 10
  },

  subtitle: {
    fontSize: '0.9rem',
    marginBottom: 30,
    opacity: 0.6,
    fontWeight: 400
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
  document.title = `${(release || {}).title} - John Sylvain`;

  if (!release && !state.loading) {
    route('/');
    return null;
  } else {
    return (
      <Page soundcloudUrl={state.soundcloudUrl} spotifyUrl={state.spotifyUrl}>
        {!state.loading ? (
          <div>
            <div className={css(styles.releaseHeader)}>
              <h1 className={css(styles.title)}>{release.title}</h1>
              <span className={css(styles.subtitle, styles.grow)}>
                {release.type.toUpperCase()} &middot; {release.release_year}
              </span>
              <span className={css(styles.subtitle)}>
                {release.track_count} tracks &middot;{' '}
                {dateFormatter.formatDuration(release.duration)}
              </span>
            </div>
            <iframe
              className={css(styles.iframe)}
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${
                release.id
              }&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
            />
          </div>
        ) : null}
      </Page>
    );
  }
};
