import { render as renderDOM } from './render'

export function app (state, actions, view, parent) {
  let globalState = Object.assign({}, state)
  let wiredActions = Object.assign({}, actions)
  let renderLock

  scheduleRender(
    wireStateToActions(globalState, wiredActions)
  )

  function wireStateToActions (state, actions) {
    for (let key in actions) {
      (function (key, action) {
        actions[key] = function (data) {
          data = action(data)

          if (typeof data === 'function') {
            data = data(globalState, actions)
          }

          if (data && data !== (state = globalState) && !data.then) {
            scheduleRender(
              (globalState = Object.assign({}, state, data))
            )
          }

          return data
        }
      })(key, actions[key])
    }
  }

  function render () {
    renderLock = !renderLock

    let next = view(globalState, wiredActions)
    if (!renderLock) {
      renderDOM(next, parent)
    }
  }

  function scheduleRender () {
    if (!renderLock) {
      renderLock = !renderLock
      setTimeout(render)
    }
  }
}
