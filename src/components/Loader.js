import { h } from '../lib'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

const styles = {
  loader: {
    fontFamily: 'Inconsolata',
    margin: '30px auto',
    maxWidth: 600,
    color: '#596275'
  }
}

const { classes } = jss
  .createStyleSheet(styles)
  .attach()

const Loader = () => 
  <div className={classes.loader}>
    <h1>Crunching numbers...</h1>
  </div>

export default Loader
