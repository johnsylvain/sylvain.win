import {
  h,
  render,
  extend,
  Component
} from './lib'
import Dashboard from './components/Dashboard'
import Loader from './components/Loader'
import jss from 'jss'
import preset from 'jss-preset-default'
import color from 'color'

jss.setup(preset())

const styles = {
  title: {
    fontWeight: 700,
    fontSize: '1.625rem',
    marginBottom: '1rem' 
  },

  app: {
    fontFamily: 'Inconsolata',
    margin: '30px auto',
    maxWidth: 600,
    color: '#596275',
    boxSizing: 'border-box',
    lineHeight: '140%'
  }
}

const { classes } = jss
  .createStyleSheet(styles)
  .attach()

function App () {  
  this.state = {
    stats: null
  }
}

extend(App.prototype, 
  Object.create(Component.prototype),
  {
    initialize () {
      this.render()
      this.fetchData()
    },

    fetchData () {
      fetch(`https://wt-5f92353bfdf241b0b97a7b3a6d3547a4-0.run.webtask.io/wakatime`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            stats: json
          })
        })
    },

    render () {
      render(
        <div className={classes.app}>
          <h1 className={classes.title}>sylvain.win</h1>
          {!!this.state.stats
            ? <Dashboard stats={this.state.stats} />
            : <Loader />
          }
        </div>,
        document.querySelector('#app')
      )
    }
  }
)

const app = new App()
app.initialize()
