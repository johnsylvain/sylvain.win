export function createElement (vnode) {
  let node = typeof vnode === 'string' || typeof vnode === 'number'
    ? document.createTextNode(vnode)
    : document.createElement(vnode.nodeName)

  if (vnode.attributes) {
    if (vnode.attributes.oncreate)
      vnode.attributes.oncreate(node)

    setAttributes(node, vnode.attributes)

    vnode.children
      .map(createElement)
      .forEach(node.appendChild.bind(node))
  }

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

function setAttributes (node, attributes) {
  for (let name in attributes) {
    if (/^on/.test(name))
      setEventListener(node, name, attributes[name])
    else
      setAttribute(node, name, attributes[name])
  }
}

function setEventListener (node, name, value) {
  node.addEventListener(
    name.slice(2).toLowerCase(), value
  )
}
