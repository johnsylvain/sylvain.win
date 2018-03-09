import { render } from './render'
import { extend } from './util'

export function app (options) {
  let { state, actions, view, target } = options
  let globalState = extend({}, state)
  let mappedActions = extend({}, actions)

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
              (globalState = extend(extend({}, state), data))
            )
          }

          return data
        }
      })(key, actions[key])
    }
  }

  function scheduleRender () {
    setTimeout(
      render.bind(
        undefined,
        target,
        view(globalState, mappedActions)
      )
    )
  }
}
