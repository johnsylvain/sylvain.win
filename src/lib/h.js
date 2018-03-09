export function h (nodeName, attributes) {
  let rest = []
  let length = arguments.length

  while (length-- > 2) rest.push(arguments[length])

  return {
    nodeName,
    attributes: attributes || {},
    children: [].concat.apply([], rest.reverse())
  }
}
