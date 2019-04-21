import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';

const fadeUp = {
  from: {
    opacity: 0,
    transform: 'translateY(5px) scale(0.98)'
  },
  to: {
    opacity: 1,
    transform: 'translateY(0px) scale(1)'
  }
};

const fade = {
  from: {
    opacity: 0,
    transform: 'none'
  },
  to: {
    opacity: 1,
    transform: 'none'
  }
};

const styles = StyleSheet.create({
  image: {
    borderRadius: '4px',
    width: 100,
    height: 100,
    backgroundSize: 'cover',
    cursor: 'pointer',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)'
  },

  albumFeatured: {
    display: 'flex',
    alignItems: 'center',
    gridColumn: '1 / span 6',
    animationName: fade,

    '@media (max-width: 768px)': {
      marginBottom: 25,
      gridColumn: '1 / span 3'
    }
  },

  album: {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: 25,
    opacity: 0,
    animationName: fadeUp,
    animationDuration: '0.8s',
    animationFillMode: 'forwards',

    '@media (max-width: 768px)': {
      marginBottom: 15
    }
  },

  featuredTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    display: 'block',
    marginLeft: 20
  },

  featuredSubtitle: {
    fontSize: '1.2rem',
    display: 'block',
    marginLeft: 20
  }
});

export const Album = ({ album, index }) => {
  const isFeatured = index === 0;

  return (
    <div
      className={css(styles.album, isFeatured && styles.albumFeatured)}
      style={`animation-delay: ${100 * index}ms`}
    >
      <a
        href={album.url}
        target="_blank"
        className={css(styles.image, isFeatured && styles.imageFeatured)}
        style={`background: url(${album.image})`}
      />
      {isFeatured && (
        <div>
          <h3 className={css(styles.featuredTitle)}>{album.album}</h3>
          <p className={css(styles.featuredSubtitle)}>by {album.artist}</p>
        </div>
      )}
    </div>
  );
};
