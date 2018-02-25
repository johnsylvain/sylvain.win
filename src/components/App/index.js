import { h, render, Component } from '../../lib'
import Dashboard from '../Dashboard'
import style from './styles'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stats: null
    }

    this.render()
    this.fetchData()
  }

  fetchData () {
    fetch(`https://wt-5f92353bfdf241b0b97a7b3a6d3547a4-0.run.webtask.io/wakatime`)
      .then(res => res.json())
      .then(json => {
        this.setState({ stats: json })
      })
  }

  render () {
    render(
      <div className={style.section}>
        <h1 className={style.title}>sylvain.win</h1>
        {!!this.state.stats
          ? <Dashboard stats={this.state.stats}/>
          : <p>Crunching the numbers...</p>
        }
      </div>,
      document.querySelector('#app')
    )
  }
}
