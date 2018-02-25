import { h } from '../lib'
import jss from 'jss'
import preset from 'jss-preset-default'
import color from 'color'

jss.setup(preset())

const styles = {
  bold: {
    fontWeight: 700
  },

  list: {
    listStyleType: 'none',
    marginLeft: '2ch'
  },

  listItem: {
    color: color('#596275')
      .lighten(0.7)
      .hex()
  },

  p: {
    marginBottom: '0.4rem'
  },

  footer: {
    fontSize: '0.8rem',
    marginTop: '1rem'
  }
}

const { classes } = jss
  .createStyleSheet(styles)
  .attach()

const Dashboard = (
  {
    stats: {
      time: { hour, minute },
      languages
    }
  }
) => (
  <div>
    <p className={classes.p}>In the past 7 days, I have coded for
      <strong className={classes.bold}> {hour} hrs {minute} mins</strong>.
    </p>
    <p className={classes.p}>My top languages are:</p>
    <ul className={classes.list}>
      {languages.map(l =>
        <li>- {l.name} <span className={classes.listItem}>({l.percent}%)</span></li>
      )}
    </ul>
    <p className={classes.footer}>Powered by <a href="https://wakatime.com"  className={classes.footer}>wakatime</a></p>
  </div>
)

export default Dashboard
