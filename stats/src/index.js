import { h, app, cloneElement } from './lib'
import App from './components/App'

app({
  target: document.querySelector('#app'),

  state: {
    stats: null
  },

  actions: {
    setData: (stats) => () => ({ stats }),
    fetchData: () => (state, actions) => {
      return fetch(`https://wt-5f92353bfdf241b0b97a7b3a6d3547a4-0.run.webtask.io/wakatime`)
        .then(res => res.json())
        .then(json => {
          actions.setData(json)
        })
    }
  },

  view: (state, actions) => (
    <div oncreate={actions.fetchData}>
      <App stats={state.stats}/>
    </div>
  )
})