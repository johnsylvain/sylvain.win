import { render } from './render'

export function app (state, actions, view, parent) {
  let globalState = Object.assign({}, state)
  let wiredActions = Object.assign({}, actions)
  let vdom = null

  scheduleRender(
    wireStateToActions(globalState, wiredActions)
  )

  function wireStateToActions (state, actions) {
    for (let key in actions) {
      (function (key, action) {
        actions[key] = function (data) {
          if (typeof (data = action(data)) === 'function')
            data = data(globalState, actions)

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

  function scheduleRender () {
    let next = view(globalState, wiredActions)
    setTimeout(
      render.bind(undefined, parent, next, vdom)
    )
    vdom = next
  }
}
