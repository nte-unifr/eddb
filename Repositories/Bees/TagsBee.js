import _ from "lodash"

export default (fields) => {
  return _
    .chain(fields)
    .filter((o) => {
      return o.tag && !_.isNil(o.val)
    })
    .map('val')
    .flatten()
    .map((v) => _.upperFirst(v))
    .value()
}