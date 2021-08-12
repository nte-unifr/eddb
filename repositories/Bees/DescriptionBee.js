import _ from "lodash"
import sanitizeHtml from "sanitize-html"

export default (fields) => {
  const val = _.find(fields, { 'type': 'description' }).val
  const description = _.isEmpty(val) ? '' : sanitizeHtml(val)
  
  return description
}
