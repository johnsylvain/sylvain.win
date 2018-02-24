export function h (nodeName, attributes, ...children) {
  children = [].concat.apply([], children)
  attributes = attributes || {}

  return typeof nodeName === 'function'
    ? nodeName(attributes, children)
    : { nodeName, attributes, children }
}
