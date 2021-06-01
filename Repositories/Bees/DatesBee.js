import _ from "lodash"

export default (fields, format) => {
  return _
    .chain(fields)
    .filter((o) => {
      return o.type === 'date' && !_.isEmpty(o.val)
    })
    .sortBy('sort')
    .map((o) => o.val < 0 ? `${Math.abs(o.val)} ${format[0]}` : `${o.val} ${format[1]}`)
    .value()
}