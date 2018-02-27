export function render (vnodes, parent) {
  const el = createElement(vnodes)

  while (parent.firstChild)
    parent.removeChild(parent.firstChild)

  parent.appendChild(el)
}

function createElement (vnode) {
  let node = typeof vnode === "string" || typeof vnode === "number"
    ? document.createTextNode(vnode)
    : document.createElement(vnode.nodeName)

  if (vnode.attributes) {
    if (vnode.attributes.oncreate)
      vnode.attributes.oncreate(node)

    for (let name in vnode.attributes)
      node.setAttribute(
        name === 'className'
          ? 'class'
          : name,
        vnode.attributes[name]
      )

    vnode.children
      .map(createElement)
      .forEach(node.appendChild.bind(node))
  }

  return node
}
