import _ from "lodash"
import sanitizeHtml from "sanitize-html"

export default (fields) => {
  return _
    .chain(fields)
    .filter((o) => {
      return o.type === 'info' && !_.isNil(o.val)
    })
    .map((o) => {
      return {
        key: o.sentenceName,
        value: sanitize(o.val)
      }
    })
    .value()
}

function sanitize(value) {
  return sanitizeHtml(value, {
    exclusiveFilter: function(frame) {
      return frame.tag === 'p' && !frame.text.trim();
    }
  })
}