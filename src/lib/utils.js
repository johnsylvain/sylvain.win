export const extend = (obj, ...props) =>
  props.reduce((acc, prop) => {
    for (let i in prop) acc[i] = prop[i]
    return acc
  }, obj)