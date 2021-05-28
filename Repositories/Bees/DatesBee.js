import _ from "lodash"

export default (fields, format) => {
  return _
  .chain(fields)
  .filter({ 'type': 'date' })
  .sortBy('sort')
  .map((o) => o.val < 0 ? `${Math.abs(o.val)} ${format[0]}` : `${o.val} ${format[1]}`)
  .value()
}