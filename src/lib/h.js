export function h (nodeName, attributes, ...children) {
  children = [].concat.apply([], children)

  return {
    nodeName,
    attributes: attributes || {},
    children
  }
}
