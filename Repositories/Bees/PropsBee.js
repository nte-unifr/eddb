import _ from "lodash"

export default (fields) => {
  return _
    .chain(fields)
    .filter((o) => {
      return o.type === 'prop' && !_.isEmpty(o.val)
    })
    .map((o) => {
      return {
        key: o.sentenceName,
        value: _.upperFirst(o.multi ? o.val.toString().replace(',', ', ') : o.val)
      }
    })
    .value()
}