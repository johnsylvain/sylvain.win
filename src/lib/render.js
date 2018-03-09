import { diff } from './reconcile'

export function render (parent, newNode, oldNode) {
  diff(parent, newNode, oldNode, 0)
}
