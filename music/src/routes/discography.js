import { h, Link } from 'kobra';
import { StyleSheet, css } from 'aphrodite';
import { Page } from '../components/Page';

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
    cursor: 'pointer'
  },

  discographyItem: {
    marginLeft: 20,
    opacity: 0.7,

    ':hover': {
      opacity: 1
    }
  }
});

function sortDiscography(obj) {
  const result = {};

  for (let key in obj) {
    const date = new Date(obj[key].releaseDate);
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
    <Page>
      {sortDiscography(state.discography).map(([year, items]) => (
        <section className={css(styles.section)}>
          <h2 className={css(styles.title)}>{year}</h2>
          {items.map(item => (
            <div className={css(styles.discographyItem)}>
              <Link
                to={`/discography/${item.slug}`}
                className={css(styles.link)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </section>
      ))}
    </Page>
  );
};
