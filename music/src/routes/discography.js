import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Page } from '../components/Page';
import { dateFormatter, dateFormats } from '../util/date-formatter';

const styles = StyleSheet.create({
  title: {
    fontSize: '1.4rem',
    display: 'block',
    marginBottom: 10,
    fontWeight: 500
  },

  section: {
    marginBottom: 40
  },

  link: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  discographyItem: {
    marginLeft: 20,
    marginBottom: 10,
    opacity: 0.7,

    ':hover': {
      opacity: 1
    }
  },

  releaseDate: {
    fontSize: '0.8rem',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 2,
    padding: '3px 5px'
  }
});

function sortDiscography(obj) {
  const result = {};

  for (let key in obj) {
    const date = new Date(obj[key].created_at);
    result[date.getFullYear()] = result[date.getFullYear()] || [];
    result[date.getFullYear()].push(obj[key]);
  }

  return Object.entries(result)
    .sort()
    .reverse();
}

export default state => {
  document.title = 'Discography - John Sylvain';

  return (
    <Page soundcloudUrl={state.soundcloudUrl} spotifyUrl={state.spotifyUrl}>
      <div>
        {sortDiscography(state.discography).map(([year, items]) => (
          <section className={css(styles.section)}>
            <h2 className={css(styles.title)}>{year}</h2>
            {items.map(item => (
              <div className={css(styles.discographyItem)}>
                <a
                  href={`/discography/${item.permalink}`}
                  className={css(styles.link)}
                >
                  <span>{item.title}</span>
                  <span className={css(styles.releaseDate)}>
                    {dateFormatter.format(item.created_at, dateFormats.MEDIUM)}
                  </span>
                </a>
              </div>
            ))}
          </section>
        ))}
      </div>
    </Page>
  );
};
