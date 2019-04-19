import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';

const fadeUp = {
  from: {
    opacity: 0,
    transform: 'translateY(10px) scale(0.98)'
  },
  to: {
    opacity: 1,
    transform: 'translateY(0px) scale(1)'
  }
}

const fade = {
  from: {
    opacity: 0,
    transform: 'none'
  },
  to: {
    opacity: 1,
    transform: 'none'
  }
}

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
    width: '100%',
    animationName: fade
  },

  album: {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: 25,
    opacity: 0,
    animationName: fadeUp,
    animationDuration: '1s',
    animationFillMode: 'forwards'
  },

  featuredTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    display: 'block',
    marginLeft: 13,
  },

  featuredSubtitle: {
    fontSize: '1.2rem',
    display: 'block',
    marginLeft: 13,
  }
})

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
    </div >
  )
}
