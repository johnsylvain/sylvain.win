import { h, app } from './lib'
import App from './components/App'

const state = {
  stats: null
}

const actions = {
  setData: (stats) => () => ({ stats }),
  fetchData: () => (state, actions) => {
    return fetch(`https://wt-5f92353bfdf241b0b97a7b3a6d3547a4-0.run.webtask.io/wakatime`)
      .then(res => res.json())
      .then(json => {
        return actions.setData(json)
      })
  }
}

const view = (state, actions) => (
  <div oncreate={actions.fetchData}>
    <App stats={state.stats}/>
  </div>
)

app(state, actions, view, document.querySelector('#app'))
