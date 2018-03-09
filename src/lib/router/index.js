import { h } from '../h'
import { cloneElement } from '../clone-element'

export function Router (props, children) {
  return (
    <div>
    {children.map(child =>
      cloneElement(child, { path: 'nice' })
    )}
    </div>
  )
}
