export function createElement (vnode) {
  let node = typeof vnode === 'string' || typeof vnode === 'number'
    ? document.createTextNode(vnode)
    : document.createElement(vnode.nodeName)

  if (!vnode.attributes) return node

  if (vnode.attributes.oncreate)
    vnode.attributes.oncreate(node)

  for (let name in vnode.attributes) {
    if (/^on/.test(name))
      setEventListener(node, name, vnode.attributes[name])
    else
      setAttribute(node, name, vnode.attributes[name])
  }

  vnode.children
    .map(createElement)
    .forEach(node.appendChild.bind(node))

  return node
}

export function setAttribute (node, name, value) {
  if (name === 'className')
    node.setAttribute('class', value)
  else
    node.setAttribute(name, value)
}

export function removeAttribute (node, name, value) {
  if (name === 'className')
    node.remove('class')
  else
    node.removeAttribute(name)
}

function setEventListener (node, name, value) {
  node.addEventListener(
    name.slice(2).toLowerCase(), value
  )
}
