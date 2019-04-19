import { h } from 'kobra';
import { StyleSheet, css } from 'aphrodite';

const pulse = {
  from: {
    opacity: 0.4
  },

  to: {
    opacity: 1
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    animationName: pulse,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate'
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
    background: '#f3f0ed',
    marginRight: 13
  },

  text: {
    width: 100,
    height: 20,
    borderRadius: 4,
    background: '#f3f0ed',

    ':not(:last-child)': {
      width: 200,
      marginBottom: 13
    }
  }
})

export const Placeholder = () => (
  <div className={css(styles.container)}>
    <div className={css(styles.image)} />
    <div>
      <div className={css(styles.text)} />
      <div className={css(styles.text)} />
    </div>
  </div>
)