import { extend } from './utils'

export function Component (props) {
  this.state = this.state || {}
  this.props = props
}

extend(Component.prototype, {
  setState (state) {
    let s = this.state;

    extend(
      s,
      typeof state === 'function'
        ? state(s, this.props)
        : state
    )
    
    this.render()
  },

  render () {}
})
