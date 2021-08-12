import _ from "lodash"
import sanitizeHtml from "sanitize-html"
import DescriptionBee from "~/repositories/Bees/DescriptionBee.js"

export default (fields) => {
  const description = DescriptionBee(fields)
  const clean = sanitizeHtml(description, {
    allowedTags: [],
    allowedAttributes: {}
  })
  const summary = _.truncate(clean, {
    'length': 180
  })
  
  return summary
}
