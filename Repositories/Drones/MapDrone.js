import _ from "lodash"
import { sentenceCase } from "sentence-case"
import { path } from "~/Repositories/Drones/PathDrone.js"

export default (item, fields) => {
  return _.map(fields, (o) => {
    o.val = o.multi ? _.map(_.get(item, o.name), o.accessor) : _.get(item, path(o))
    o.sentenceName = sentenceCase(o.name)
    return o
  })
}