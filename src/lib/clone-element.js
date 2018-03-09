import { h } from './h'

export function cloneElement (vnode, props) {
    return h(
        vnode.nodeName,
        Object.assign({}, vnode.attributes, props),
        arguments.length>2 ? [].slice.call(arguments, 2) : vnode.children
    )
}
