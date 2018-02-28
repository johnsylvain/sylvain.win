import { diff } from './diff'
import { patch } from './patch'

export function render (parent, newNode, oldNode) {
  const patches = diff(newNode, oldNode)
  patch(parent, patches)
}
