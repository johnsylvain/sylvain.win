export function h(nodeName, attributes, ...children) {
  return {
    nodeName,
    attributes: attributes || {},
    children: [].concat.apply([], children)
  }
}

export function render(vnodes, target) {
  const vdom = createVDOM(vnodes);
  target.appendChild(createElement(vdom));
}

function createElement(vnode) {
  let node = typeof vnode === 'string' || typeof vnode === 'number'
    ? document.createTextNode(vnode)
    : document.createElement(vnode.nodeName);

  if (vnode.attributes) {
    for (let name in vnode.attributes) {
      if (name === 'className') {
        node.setAttribute('class', vnode.attributes[name]);
      } else {
        node.setAttribute(name, vnode.attributes[name]);
      }
    }

    for (let i = 0; i < vnode.children.length; i++) {
      node.appendChild(createElement(vnode.children[i]));
    }
  }

  return node;
}

function createVDOM(vnode) {
  const newVNode = Object.assign({}, vnode, {
    children: (vnode.children || []).map(
      child =>
        typeof child === 'string' || typeof child === 'number'
          ? child.toString()
          : createVDOM(child)
    )
  });

  return typeof vnode.nodeName === 'function'
    ? vnode.nodeName.isClass
      ? createVDOM((new vnode.nodeName(vnode.attributes)).render(vnode.attributes, vnode.children))
      : createVDOM(vnode.nodeName(vnode.attributes, vnode.children))
    : newVNode;
}