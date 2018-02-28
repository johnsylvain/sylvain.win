import {
  UPDATE,
  REPLACE,
  REMOVE,
  CREATE,
  SET_ATTRIBUTE,
  REMOVE_ATTRIBUTE
} from './constants'

import {
  createElement,
  setAttribute,
  removeAttribute
} from './create-element'

function patchAttributes (parent, patches) {
  for (let i = 0; i < patches.length; i ++) {
    const attribute = patches[i]
    const { type, name, value } = attribute

    if (type === SET_ATTRIBUTE)
      setAttribute(parent, name, value)

    else if (type === REMOVE_ATTRIBUTE)
      removeAttribute(parent, name, value)
  }
}

export function patch (parent, patches, index = 0) {
  if (!patches) return

  const el = parent.childNodes[index]

  switch(patches.type) {
    case CREATE: {
      const { newNode } = patches
      const newElement = createElement(newNode)
      return parent.appendChild(newElement)
    }
    case REMOVE:
      return parent.removeChild(el)
    case REPLACE: {
      const { newNode } = patches
      const newElement = createElement(newNode)
      return parent.replaceChild(newElement, el)
    }
    case UPDATE: {
      const { children, attributes } = patches

      patchAttributes(el, attributes)

      for (let i = 0; i < children.length; i++) {
        patch(el, children[i], i)
      }
    }
  }
}
