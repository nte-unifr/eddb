import _ from "lodash"

export default (fields) => {
  let images = []

  const condition = _.find(fields, { 'type': 'image', 'meta': 'condition' })
  if (condition.val === false) { return [] }

  const main  = _.find(fields, { 'type': 'image', 'meta': 'main' })
  images.push(main.val)
  
  return images
}