import { render } from './render'

export function app (options) {
  let { state, actions, view, target } = options
  let globalState = Object.assign({}, state)
  let mappedActions = Object.assign({}, actions)
  let vdom = null

  scheduleRender(
    mapStateToActions(globalState, mappedActions)
  )

  function mapStateToActions (state, actions) {
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
    let next = view(globalState, mappedActions)
    setTimeout(
      render.bind(undefined, target, next, vdom)
    )
    vdom = next
  }
}
